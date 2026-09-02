#!/usr/bin/env node
'use strict';

/*
 * md-to-pdf-node
 *
 * Converts Markdown containing LaTeX math ($$...$$, \(...\), \[...\]) and
 * Mermaid diagrams (```mermaid / ~~~mermaid fences) into a PDF.
 *
 * Pipeline:
 *   1. Math segments are stashed away BEFORE markdown parsing, so the
 *      markdown parser never mangles TeX (_, *, |, \\ inside math).
 *   2. markdown-it renders the document to HTML (GFM tables, heading anchors).
 *   3. Headless Chrome (Puppeteer) renders Mermaid diagrams to inline SVG and
 *      typesets the math with MathJax (SVG output — no webfont issues).
 *   4. The page is printed to PDF with page numbers.
 *
 * Mermaid and MathJax are loaded from node_modules — no network needed.
 *
 * Usage:
 *   node main.js <input.md> [output.pdf] [options]
 *
 *   Markdown sources and generated PDFs live in ./src. An input that is not
 *   found as given is looked up in ./src (the .md extension may be omitted),
 *   and the PDF is written next to the input unless output.pdf includes a
 *   directory.
 *
 * Options:
 *   --fix-encoding   Repair a double-encoded UTF-8 file ("MÃ¶bius" -> "Möbius")
 *   --keep-html      Keep the intermediate .render.html next to the PDF
 *   --landscape      Landscape orientation
 *   --format=<size>  Paper size (default: A4)
 */

const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');

// Where the Markdown sources and generated PDFs live.
const SRC_DIR = path.join(__dirname, 'src');

// ---------------------------------------------------------------------------
// CLI
// ---------------------------------------------------------------------------

function usage() {
  console.log(`Usage: node main.js <input.md> [output.pdf] [options]

Input files are looked up as given, then inside ./src (".md" may be omitted).
The PDF is written next to the input file (i.e. into ./src) unless output.pdf
includes a directory.

Options:
  --fix-encoding   Repair a double-encoded UTF-8 file ("MÃ¶bius" -> "Möbius")
  --keep-html      Keep the intermediate .render.html next to the PDF
  --landscape      Landscape orientation
  --format=<size>  Paper size: A4 (default), A3, Letter, Legal, ...
  -h, --help       Show this help`);
}

function parseArgs(argv) {
  const args = { _: [] };
  for (const a of argv) {
    if (a === '--fix-encoding') args.fixEncoding = true;
    else if (a === '--keep-html') args.keepHtml = true;
    else if (a === '--landscape') args.landscape = true;
    else if (a.startsWith('--format=')) args.format = a.slice('--format='.length);
    else if (a === '-h' || a === '--help') args.help = true;
    else if (a.startsWith('-')) {
      console.error(`Unknown option: ${a}`);
      process.exit(1);
    } else args._.push(a);
  }
  return args;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function escapeHtml(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Heuristic for UTF-8 text that was decoded as Latin-1 and re-encoded
// (produces sequences like "MÃ¶bius", "â€”", "Â·").
function looksMojibake(text) {
  return /Ã[-¿]|â€|Â[ -¿]/.test(text);
}

// Reverse of a Windows-1252 (or Latin-1) mis-decode: map each character back
// to the byte it came from, then re-decode the byte stream as UTF-8.
// Characters that cannot be a mis-decode artifact are kept unchanged.
const CP1252_REVERSE = {
  0x20ac: 0x80, 0x201a: 0x82, 0x0192: 0x83, 0x201e: 0x84, 0x2026: 0x85,
  0x2020: 0x86, 0x2021: 0x87, 0x02c6: 0x88, 0x2030: 0x89, 0x0160: 0x8a,
  0x2039: 0x8b, 0x0152: 0x8c, 0x017d: 0x8e, 0x2018: 0x91, 0x2019: 0x92,
  0x201c: 0x93, 0x201d: 0x94, 0x2022: 0x95, 0x2013: 0x96, 0x2014: 0x97,
  0x02dc: 0x98, 0x2122: 0x99, 0x0161: 0x9a, 0x203a: 0x9b, 0x0153: 0x9c,
  0x017e: 0x9e, 0x0178: 0x9f,
};

function fixEncoding(text) {
  const bytes = [];
  for (const ch of text) {
    const cp = ch.codePointAt(0);
    if (cp <= 0xff) bytes.push(cp);
    else if (CP1252_REVERSE[cp] !== undefined) bytes.push(CP1252_REVERSE[cp]);
    else for (const b of Buffer.from(ch, 'utf8')) bytes.push(b);
  }
  return Buffer.from(bytes).toString('utf8');
}

// Locate the input file: as given, then inside ./src (with or without ".md").
function resolveInput(arg) {
  const candidates = [
    path.resolve(arg),
    path.join(SRC_DIR, arg),
    path.join(SRC_DIR, `${arg}.md`),
  ];
  return candidates.find((c) => fs.existsSync(c) && fs.statSync(c).isFile()) || null;
}

// Output path: default is the input name with .pdf, next to the input (so in
// ./src). A bare filename (no directory part) is also placed next to the input;
// anything with a directory component is used as given.
function resolveOutput(arg, inputPath) {
  const inputDir = path.dirname(inputPath);
  if (!arg) {
    return path.join(inputDir, path.basename(inputPath).replace(/\.(md|markdown)$/i, '') + '.pdf');
  }
  if (path.basename(arg) === arg) return path.join(inputDir, arg);
  return path.resolve(arg);
}

// Resolve a file inside node_modules, tolerating "exports"-restricted packages.
function resolveAsset(rel) {
  const candidates = [];
  try { candidates.push(require.resolve(rel)); } catch { /* exports map may block subpaths */ }
  candidates.push(path.join(__dirname, 'node_modules', rel));
  for (const c of candidates) {
    if (fs.existsSync(c)) return c;
  }
  throw new Error(`Cannot find ${rel} — did you run "npm install"?`);
}

// ---------------------------------------------------------------------------
// Math protection
//
// TeX must be hidden from the markdown parser: underscores become <em>,
// pipes break tables, backslashes get eaten. Each math segment is replaced
// by an inert alphanumeric placeholder and restored (HTML-escaped, with its
// original delimiters) after markdown rendering. MathJax then typesets it
// in the browser.
// ---------------------------------------------------------------------------

function protectMath(text, stash) {
  const put = (match) => {
    stash.push(match);
    return `MATHSTASH${stash.length - 1}X`;
  };
  return text
    .replace(/\$\$[\s\S]+?\$\$/g, put)   // display math
    .replace(/\\\[[\s\S]+?\\\]/g, put)   // display math \[...\]
    .replace(/\\\([\s\S]+?\\\)/g, put);  // inline math \(...\)
}

// Apply protectMath only OUTSIDE fenced code blocks, so `$$` inside a code
// sample or a Mermaid diagram is never touched.
function protectMathOutsideFences(src, stash) {
  const fenceRe = /^(```+|~~~+)[^\n]*\n[\s\S]*?^\1[ \t]*$/gm;
  let out = '';
  let last = 0;
  let m;
  while ((m = fenceRe.exec(src)) !== null) {
    out += protectMath(src.slice(last, m.index), stash);
    out += m[0];
    last = m.index + m[0].length;
  }
  out += protectMath(src.slice(last), stash);
  return out;
}

function restoreMath(html, stash) {
  return html.replace(/MATHSTASH(\d+)X/g, (_, i) => escapeHtml(stash[Number(i)]));
}

// ---------------------------------------------------------------------------
// Markdown rendering
// ---------------------------------------------------------------------------

// GitHub-compatible heading slugs so in-document TOC links keep working.
function githubSlug(text, seen) {
  let slug = text
    .toLowerCase()
    .trim()
    .replace(/[^\p{L}\p{N}\s-]/gu, '')
    .replace(/\s+/g, '-');
  if (seen.has(slug)) {
    const n = seen.get(slug) + 1;
    seen.set(slug, n);
    slug = `${slug}-${n}`;
  } else {
    seen.set(slug, 0);
  }
  return slug;
}

function createMarkdownIt() {
  const MarkdownIt = require('markdown-it');
  const md = new MarkdownIt({ html: true, linkify: false, typographer: false });

  // Mermaid fences become <pre class="mermaid"> for in-browser rendering;
  // everything else uses the default (escaped) code block renderer.
  const defaultFence = md.renderer.rules.fence.bind(md.renderer.rules);
  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    const lang = (token.info || '').trim().toLowerCase();
    if (lang === 'mermaid') {
      return `<div class="mermaid-block"><pre class="mermaid">${escapeHtml(token.content)}</pre></div>\n`;
    }
    return defaultFence(tokens, idx, options, env, self);
  };

  // Add GitHub-style ids to headings.
  md.core.ruler.push('heading_ids', (state) => {
    const seen = new Map();
    const tokens = state.tokens;
    for (let i = 0; i < tokens.length; i++) {
      if (tokens[i].type !== 'heading_open') continue;
      const inline = tokens[i + 1];
      if (!inline || inline.type !== 'inline') continue;
      const text = inline.children
        .filter((t) => t.type === 'text' || t.type === 'code_inline')
        .map((t) => t.content)
        .join('');
      tokens[i].attrSet('id', githubSlug(text, seen));
    }
  });

  return md;
}

// ---------------------------------------------------------------------------
// HTML template
// ---------------------------------------------------------------------------

const CSS = `
  * { box-sizing: border-box; }
  html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  body {
    font-family: Georgia, 'Times New Roman', serif;
    font-size: 11pt;
    line-height: 1.55;
    color: #1a1a1a;
    margin: 0;
    padding: 0;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: Helvetica, Arial, sans-serif;
    line-height: 1.25;
    margin: 1.4em 0 0.5em;
    page-break-after: avoid;
    color: #111;
  }
  h1 { font-size: 21pt; margin-top: 0; }
  h2 { font-size: 15pt; border-bottom: 1.5px solid #444; padding-bottom: 0.2em; }
  h3 { font-size: 12.5pt; }
  h4 { font-size: 11pt; }
  p { margin: 0.6em 0; }
  a { color: #0b57a4; text-decoration: none; }
  strong { color: #000; }
  hr { border: none; border-top: 1px solid #ccc; margin: 1.6em 0; }
  blockquote {
    margin: 0.8em 0 0.8em 0.2em;
    padding: 0.1em 1em;
    border-left: 3px solid #999;
    color: #444;
    background: #fafafa;
  }
  code {
    font-family: Menlo, Consolas, 'Courier New', monospace;
    font-size: 0.86em;
    background: #f4f4f4;
    border: 1px solid #e2e2e2;
    border-radius: 3px;
    padding: 0.05em 0.3em;
  }
  pre {
    background: #f7f7f7;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 0.7em 0.9em;
    overflow-x: hidden;
    white-space: pre-wrap;
    word-wrap: break-word;
  }
  pre code { background: none; border: none; padding: 0; font-size: 9pt; }
  table {
    border-collapse: collapse;
    margin: 1em 0;
    font-size: 9.5pt;
    width: 100%;
  }
  th, td {
    border: 1px solid #bbb;
    padding: 4px 8px;
    text-align: left;
    vertical-align: top;
  }
  th { background: #efefef; font-family: Helvetica, Arial, sans-serif; font-size: 9pt; }
  tr:nth-child(even) td { background: #fafafa; }
  ul, ol { margin: 0.5em 0; padding-left: 1.6em; }
  li { margin: 0.2em 0; }

  /* Mermaid */
  .mermaid-block, .mermaid-rendered {
    text-align: center;
    margin: 1.2em 0;
    page-break-inside: avoid;
  }
  .mermaid-rendered svg { max-width: 100%; height: auto; }
  pre.mermaid-failed {
    text-align: left;
    border-color: #d09;
  }

  /* MathJax (SVG output) */
  mjx-container { max-width: 100%; }
  mjx-container[display="true"] {
    display: block;
    margin: 0.9em 0;
    page-break-inside: avoid;
    text-align: center;
  }
  mjx-container > svg { max-width: 100% !important; height: auto !important; }
`;

function buildHtml({ title, body, baseHref }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<base href="${escapeHtml(baseHref)}">
<title>${escapeHtml(title)}</title>
<style>${CSS}</style>
</head>
<body>
${body}
</body>
</html>`;
}

// ---------------------------------------------------------------------------
// Browser-side rendering (Mermaid + MathJax), then print to PDF
// ---------------------------------------------------------------------------

async function renderPdf({ htmlPath, outputPath, format, landscape }) {
  const puppeteer = require('puppeteer');
  const browser = await puppeteer.launch();
  try {
    const page = await browser.newPage();
    page.on('pageerror', (err) => console.warn(`  page error: ${err.message}`));

    await page.goto(pathToFileURL(htmlPath).href, { waitUntil: 'load', timeout: 120000 });

    // --- Mermaid: render each diagram individually so one bad diagram
    // --- doesn't kill the rest; failures keep their source code visible.
    await page.addScriptTag({ path: resolveAsset('mermaid/dist/mermaid.min.js') });
    const mermaidReport = await page.evaluate(async () => {
      const blocks = Array.from(document.querySelectorAll('pre.mermaid'));
      if (blocks.length === 0) return { total: 0, ok: 0, errors: [] };
      window.mermaid.initialize({
        startOnLoad: false,
        theme: 'neutral',
        securityLevel: 'loose',
        flowchart: { htmlLabels: true },
        // The neutral theme's default xychart palette is nearly invisible.
        themeVariables: {
          xyChart: {
            plotColorPalette: '#1f5fa8, #c0392b, #1e8449, #b7791f',
          },
        },
      });
      let ok = 0;
      const errors = [];
      for (let i = 0; i < blocks.length; i++) {
        const el = blocks[i];
        const code = el.textContent;
        try {
          const { svg } = await window.mermaid.render(`mmd-${i}`, code);
          const div = document.createElement('div');
          div.className = 'mermaid-rendered';
          div.innerHTML = svg;
          el.parentElement.replaceWith(div);
          ok++;
        } catch (e) {
          errors.push({ index: i, message: String((e && e.message) || e) });
          el.classList.add('mermaid-failed');
          for (const id of [`mmd-${i}`, `dmmd-${i}`]) {
            const leftover = document.getElementById(id);
            if (leftover) leftover.remove();
          }
        }
      }
      return { total: blocks.length, ok, errors };
    });
    console.log(`mermaid: ${mermaidReport.ok}/${mermaidReport.total} diagrams rendered`);
    for (const e of mermaidReport.errors) {
      console.warn(`  diagram #${e.index + 1} failed (source kept in PDF): ${e.message}`);
    }

    // --- MathJax: SVG output avoids webfont loading entirely. The default
    // --- delimiters are exactly $$...$$, \[...\], \(...\).
    // The "full" bundle ships every TeX extension (boldsymbol, cancel, ...);
    // the slim tex-svg.js would try to fetch extensions at runtime, which
    // fails because an injected script tag has no src to resolve against.
    await page.evaluate(() => {
      window.MathJax = { svg: { fontCache: 'local' } };
    });
    await page.addScriptTag({ path: resolveAsset('mathjax/es5/tex-svg-full.js') });
    await page.evaluate(() => window.MathJax.startup.promise);
    const mathReport = await page.evaluate(() => {
      const errors = Array.from(document.querySelectorAll('mjx-merror')).map(
        (e) => e.getAttribute('data-mjx-error') || e.textContent
      );
      return { count: document.querySelectorAll('mjx-container').length, errors };
    });
    console.log(`mathjax: ${mathReport.count} expressions typeset`);
    for (const msg of mathReport.errors) console.warn(`  math error: ${msg}`);

    await page.evaluate(() => document.fonts.ready);

    await page.pdf({
      path: outputPath,
      format,
      landscape,
      printBackground: true,
      displayHeaderFooter: true,
      headerTemplate: '<span></span>',
      footerTemplate:
        '<div style="font-size:8px; width:100%; text-align:center; color:#888;">' +
        '<span class="pageNumber"></span> / <span class="totalPages"></span></div>',
      margin: { top: '16mm', bottom: '16mm', left: '15mm', right: '15mm' },
      timeout: 180000,
    });

    return { mermaidReport, mathReport };
  } finally {
    await browser.close();
  }
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) { usage(); return; }
  if (args._.length === 0) { usage(); process.exitCode = 1; return; }

  const inputPath = resolveInput(args._[0]);
  if (!inputPath) {
    console.error(
      `Input file not found: ${args._[0]} (looked in the current directory and ${SRC_DIR})`
    );
    process.exitCode = 1;
    return;
  }
  const outputPath = resolveOutput(args._[1], inputPath);

  let text = fs.readFileSync(inputPath, 'utf8');
  if (args.fixEncoding) {
    text = fixEncoding(text);
    console.log('applied --fix-encoding (latin1 round-trip)');
  } else if (looksMojibake(text)) {
    console.warn(
      'warning: input looks double-encoded (e.g. "MÃ¶bius" instead of "Möbius"); ' +
        're-run with --fix-encoding to repair it'
    );
  }

  // 1. Hide math from the markdown parser.
  const stash = [];
  const protectedSrc = protectMathOutsideFences(text, stash);

  // 2. Markdown -> HTML.
  const md = createMarkdownIt();
  let body = md.render(protectedSrc);

  // 3. Put the math back, HTML-escaped, for MathJax to typeset.
  body = restoreMath(body, stash);

  const titleMatch = text.match(/^#\s+(.+)$/m);
  const title = titleMatch ? titleMatch[1].trim() : path.basename(inputPath);
  // <base> points at the source directory so relative images keep working.
  const baseHref = pathToFileURL(path.dirname(inputPath) + path.sep).href;
  const html = buildHtml({ title, body, baseHref });

  const htmlPath = outputPath.replace(/\.pdf$/i, '') + '.render.html';
  fs.writeFileSync(htmlPath, html, 'utf8');
  console.log(`markdown: rendered ${stash.length} math segments protected, HTML written`);

  // 4. Render diagrams + math in headless Chrome and print to PDF.
  try {
    await renderPdf({
      htmlPath,
      outputPath,
      format: args.format || 'A4',
      landscape: Boolean(args.landscape),
    });
  } finally {
    if (!args.keepHtml && fs.existsSync(htmlPath)) fs.unlinkSync(htmlPath);
  }

  const sizeMb = (fs.statSync(outputPath).size / 1024 / 1024).toFixed(2);
  console.log(`wrote ${outputPath} (${sizeMb} MB)`);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
