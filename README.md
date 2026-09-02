# md-to-pdf-node

Converts Markdown containing **LaTeX math** and **Mermaid diagrams** to PDF.

- Math: `$$...$$`, `\[...\]` (display) and `\(...\)` (inline), typeset with
  MathJax (SVG output — crisp in print, no webfonts).
- Diagrams: ` ```mermaid ` / `~~~mermaid` fences (flowcharts, xy-charts,
  subgraphs, HTML labels, ...), rendered with Mermaid 11.
- GFM tables, GitHub-compatible heading anchors (in-document TOC links work
  and stay clickable in the PDF), page numbers in the footer.
- Fully offline: Mermaid and MathJax load from `node_modules`, the PDF is
  printed by the Chromium bundled with Puppeteer.

Math is protected from the Markdown parser before rendering, so `_`, `*`, `|`
and `\\` inside TeX are never mangled (including math inside table cells).

## Setup

```sh
npm install
```

## Usage

```sh
node main.js <input.md> [output.pdf] [options]
```

Options:

| Option | Effect |
|---|---|
| `--fix-encoding` | Repair a double-encoded UTF-8 file (`MÃ¶bius` → `Möbius`, `â€”` → `—`) |
| `--keep-html` | Keep the intermediate `.render.html` next to the PDF (debugging) |
| `--landscape` | Landscape orientation |
| `--format=<size>` | Paper size: `A4` (default), `A3`, `Letter`, `Legal`, ... |

Example:

```sh
node main.js EBU_Atomic_Generator_Force_Interaction_Mathematical_Guide.md
```

A Mermaid diagram that fails to parse does not abort the run: its source is
kept in the PDF and a warning with the parser message is printed.
