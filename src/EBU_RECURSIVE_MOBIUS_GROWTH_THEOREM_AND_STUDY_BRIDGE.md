# EBU Recursive Möbius Growth Theorem and Study Bridge

## Purpose and status

This document records a prospective mathematical and scientific bridge between:

- growing population, resources, and demand;
- expansion of a declared EBU dependency topology;
- canonical recursive motifs;
- Boolean or feasible-poset Möbius decomposition;
- certified reuse of previously solved structures;
- correction and cache-invalidation propagation; and
- long-run viability and homeostasis tests.

It is a conceptual input for a separately audited Stage D authority clarification.
It does not modify the accepted EBU equation, authorize a Stage E harness, execute
a Stage F study, report a scientific result, or revise a book manuscript.

The central claim is not that Fibonacci is a universal law. The central claim is
that a declared recursive composition admits an exact Möbius interaction identity,
and that certified self-similarity may permit exact reuse of earlier calculations.

## 1. Three objects that must remain distinct

The programme joins three mathematical objects without conflating them.

1. **Population and demand dynamics** determine how the requested scale changes
   through time.
2. **Topology and motif growth** determine how providers, actions, resources,
   constraints, and their declared dependencies are expanded.
3. **Möbius interaction and inverse reconstruction** determine how individual,
   pairwise, and higher-order contributions reconstruct the declared EBU set
   function.

Population growth does not select a topology automatically. A provider,
institution, scientific domain, or model authority declares or measures the
topology. EBU validates its typed, versioned, provenance-linked, and
boundary-complete use.

## 2. Time- and topology-indexed EBU without changing the core equation

Let

\[
\Theta_t
\]

be the declared topology at time \(t\), and let \(A_t\) be its finite action
set. Write the existing EBU set function with its context exposed:

\[
E_t(S)=E(S;\Theta_t,x_t,h_t,\pi_t),
\qquad S\subseteq A_t,
\]

where \(x_t\) is the declared state, \(h_t\) the required history and boundary
information, and \(\pi_t\) the frozen protocol.

This indexing does not add a Fibonacci term to the EBU equation. It makes
explicit that a value belongs to a particular time, topology, state, history,
and protocol.

## 3. Raw Möbius decomposition and inverse reconstruction

For a finite Boolean action domain with an explicit empty baseline,

\[
I_t(S)=\sum_{T\subseteq S}(-1)^{|S|-|T|}E_t(T).
\]

The inverse, or zeta reconstruction, is

\[
\boxed{E_t(S)=\sum_{T\subseteq S}I_t(T)}.
\]

The empty coefficient remains

\[
I_t(\varnothing)=E_t(\varnothing).
\]

For a declared finite feasible poset \(P_t\), the corresponding incidence
algebra formulas are

\[
I_t(x)=\sum_{y\le x}\mu_{P_t}(y,x)E_t(y),
\qquad
E_t(x)=\sum_{y\le x}I_t(y).
\]

No Boolean value may be invented for an infeasible subset.

## 4. Recursive Möbius surplus identity

Assume a declared ordered recursive motif family

\[
M_{n+1}=M_n\oplus M_{n-1}.
\]

All compared values must use the same units, empty baseline, boundary, initial
augmented state, history, feasibility, removal, preservation, resolver, loss,
process-account, commitment, and settlement semantics.

Define

\[
R_n=E(M_n)-E(\varnothing).
\]

At level \(n\), treat the two child motifs as two macro-actions \(a\) and \(b\):

\[
e_n(\varnothing)=E(\varnothing),
\]

\[
e_n(\{a\})=E(M_n),
\qquad
e_n(\{b\})=E(M_{n-1}),
\]

\[
e_n(\{a,b\})=E(M_{n+1}).
\]

The raw two-child Möbius coefficient is

\[
\begin{aligned}
I_n(\{a,b\})
&=e_n(\{a,b\})-e_n(\{a\})-e_n(\{b\})+e_n(\varnothing)\\
&=R_{n+1}-R_n-R_{n-1}.
\end{aligned}
\]

Therefore the accepted recursive surplus is exactly the macro-level Möbius
interaction:

\[
\boxed{J_n=I_n(\{a,b\})=R_{n+1}-R_n-R_{n-1}}.
\]

Inverse Möbius reconstruction gives the exact forced recurrence

\[
\boxed{R_{n+1}=R_n+R_{n-1}+J_n}.
\]

This is an algebraic theorem under the stated common-protocol assumptions. It
is not a scientific observation about a real population.

## 5. Interpretation of the recursive interaction

- \(J_n=0\) means same-protocol structural additivity at level \(n\).
- \(J_n>0\) means a positive recursive interaction under that protocol.
- \(J_n<0\) means a negative recursive interaction under that protocol.

The sign alone does not prove causality, fairness, cooperation, welfare, or
universal social benefit. It identifies the non-additive term required for
exact reconstruction.

## 6. Fibonacci projection with interaction forcing

Let \(F_0=0\) and \(F_1=1\). Iterating the forced recurrence gives, for
\(n\ge1\),

\[
\boxed{
R_n=F_nR_1+F_{n-1}R_0+
\sum_{k=1}^{n-1}F_{n-k}J_k
}.
\]

### Proof

The result is true at \(n=1\). At \(n=2\), it is exactly

\[
R_2=R_1+R_0+J_1.
\]

Assume the formula for \(R_n\) and \(R_{n-1}\). Substituting both expressions
into

\[
R_{n+1}=R_n+R_{n-1}+J_n
\]

and using

\[
F_{m+1}=F_m+F_{m-1}
\]

combines the base terms and every earlier forcing term into the required
formula at \(n+1\).

### Consequence

When every \(J_k=0\), the surplus sequence obeys a homogeneous Fibonacci-form
recurrence. Fibonacci structure is not inferred merely because this special
case is mathematically available.

## 7. Lucas projection

Lucas numbers satisfy

\[
L_{n+1}=L_n+L_{n-1},
\qquad L_0=2,
\qquad L_1=1.
\]

If every \(J_k=0\) and

\[
R_0=2c,
\qquad R_1=c,
\]

then

\[
\boxed{R_n=cL_n}.
\]

Lucas behavior is therefore an initial-condition family of the same second-order
recursion. It is a useful registered control, not a separate universal EBU law.

## 8. Exact missing-interaction error and correction propagation

If a model reconstructs the recursive system while incorrectly setting all
interactions to zero, its projection is

\[
\widehat R_n=F_nR_1+F_{n-1}R_0.
\]

The exact omitted-interaction error is

\[
\boxed{
R_n-\widehat R_n=
\sum_{k=1}^{n-1}F_{n-k}J_k
}.
\]

A correction \(\delta\) to one earlier interaction \(J_q\) produces

\[
\boxed{\Delta R_n=F_{n-q}\delta,\qquad n>q}.
\]

This is dependency propagation through the declared recurrence. It is not a
physical wave, phase interference, or evidence of causal transmission.

For a general Boolean table whose raw values change by \(\Delta E(Q)\),
linearity gives

\[
\Delta I(S)=
\sum_{Q\subseteq S}(-1)^{|S|-|Q|}\Delta E(Q).
\]

For a feasible poset,

\[
\Delta I(x)=\sum_{q\le x}\mu_P(q,x)\Delta E(q).
\]

These formulas define the algebraic affected region. Operational cache reuse
still requires complete dependency, alias, boundary, history, authority, and
provenance validation.

## 9. Recursive coefficient transport and scaling

An occurrence reused at a larger recursive level is not necessarily
coefficient-identical to its smaller source. Canonical identity answers whether
two declared structures are equivalent under the accepted encoding. It does
not by itself say whether an extensive, intensive, boundary, pairwise, or
higher-order coefficient is unchanged when the system is enlarged.

Before comparing coefficients across levels, declare a role-preserving transport
map

\[
\iota_n:\mathcal I(M_n)\longrightarrow\mathcal I(M_{n+1})
\]

from exposed interaction coordinates of the smaller motif to their corresponding
coordinates in the larger motif. Then declare or derive a typed scaling operator

\[
\mathcal S_{n,S}
\]

for every transportable coordinate. The simplest scalar case is

\[
\widehat I_{n+1}(\iota_n S)=\lambda_{n,S}I_n(S).
\]

The exact scaling residual is

\[
\boxed{
K_{n+1}(\iota_n S)
=I_{n+1}(\iota_n S)-\lambda_{n,S}I_n(S)
}.
\]

- \(K_{n+1}=0\) establishes the declared exact scaling relation for that
  coordinate and protocol.
- \(K_{n+1}\ne0\) records new interaction, boundary, state, congestion, delay,
  or other scale-dependent content that cannot be obtained by scaling alone.
- An undeclared \(\lambda_{n,S}\), missing transport map, changed units, or
  changed query domain forbids scaled reuse.

Several scaling classes must remain distinct:

1. **Invariant/intensive:** \(\lambda_{n,S}=1\).
2. **Occurrence-extensive:**
   \(\lambda_{n,S}=N(M_{n+1})/N(M_n)\), but only when a theorem or domain
   declaration proves identical per-occurrence contribution and complete
   additivity for that coefficient.
3. **Boundary-extensive:** scaling follows the declared exposed-boundary measure,
   not total occurrence count.
4. **Degree-homogeneous:** \(\lambda_{n,S}=s_n^{\alpha_S}\) for a separately
   justified scaling degree \(\alpha_S\).
5. **Non-scalable:** direct recomputation is required.

For the declared Fibonacci occurrence family,

\[
N(M_n)=F_{n+1},
\]

so an occurrence-extensive coefficient has the prospective scale ratio

\[
\boxed{
\lambda_n^{\mathrm{occ}}
=\frac{F_{n+2}}{F_{n+1}}
\longrightarrow\varphi
}.
\]

This limit does not imply that every EBU or Möbius coefficient scales by the
golden ratio. Pairwise and higher-order interactions may scale with boundary
size, interface count, density, congestion, or not obey a closed scaling law at
all. Lucas-compatible occurrence families have an analogous consecutive-ratio
limit but different finite-level initial conditions.

When a smaller coefficient is corrected by \(\Delta I_n(S)\), the transported
larger coefficient obeys

\[
\Delta I_{n+1}(\iota_n S)
=\lambda_{n,S}\Delta I_n(S)+\Delta K_{n+1}(\iota_n S).
\]

Therefore a scaling rule becomes part of the cache key, dependency DAG, and
invalidation receipt. A changed factor, scaling degree, transport map, boundary,
or residual invalidates every dependent larger-level result.

The scientific programme must compare direct expanded coefficients with scaled
predictions at every tested level. It must include exact invariant, extensive,
boundary-scaled, deliberately misscaled, and non-scalable controls. Scaling
factors belong to mathematical derivation or provider/domain/model authority;
EBU does not infer the socially or physically correct factor automatically.

## 10. Incremental topology-extension theorem

Let the action domain expand from

\[
A_t
\quad\text{to}\quad
A_{t+1}=A_t\cup B_t.
\]

For an old subset \(S\subseteq A_t\), if

\[
E_{t+1}(T)=E_t(T)
\quad\text{for every }T\subseteq S,
\]

then

\[
\boxed{I_{t+1}(S)=I_t(S)}.
\]

This follows immediately because the defining Möbius sum is identical term by
term. New elements do not require old coefficients to be recomputed unless they
change old subset values, boundaries, histories, feasibility, or other
result-affecting authority.

If an old subset value changes, its correction propagates through the declared
upward cone. If a certified boundary is crossed or invalidated, all dependent
summaries must be reopened. Stale reuse must fail closed.

## 11. Population and demand coupling

Population is a model input, not an EBU-discovered topology. One registered
discrete logistic scenario may be

\[
P_{t+1}=P_t+rP_t\left(1-\frac{P_t}{K}\right),
\]

with demand

\[
D_t=q_tP_t+d_t^{\mathrm{institutional}}+d_t^{\mathrm{shock}}.
\]

The scientific programme must also include linear, exponential, seasonal,
pulsed, shock, declining, migration-like, and adversarial demand controls.
Logistic growth is neither assumed nor fitted after outcomes are visible.

Given declared capacity \(C_n\) and reserve margin \(m_t\), an expansion policy
may choose

\[
n_t=\min\{n:C_n\ge D_t+m_t\}.
\]

If, under separately proved additive-capacity assumptions,

\[
C_n=cF_{n+1},
\]

then

\[
n_t=\Theta(\log D_t).
\]

For fixed-carrying-capacity logistic demand, the required level eventually
saturates. This is a conditional capacity projection. It does not prove
homeostasis, timely construction, adequate resources, or social desirability.

### 11.1 Bidirectional capacity-population hypothesis

The demand-driven direction above is only one registered causal arm. The
programme must also test the reverse and bidirectional possibilities:

\[
\text{recursive expansion}
\longrightarrow
\text{net interaction benefit}
\longrightarrow
\text{usable capacity}
\longrightarrow
\text{possible demographic response}.
\]

For a capacity-compatible transported coefficient, define the net capacity
created at expansion \(n+1\) only after all construction, maintenance,
resource, correction, delay, and loss accounts have been settled:

\[
\boxed{
C_{n+1}=\lambda_n C_n+K^C_{n+1}-X_{n+1}
},
\]

where \(K^C_{n+1}\) is the interaction or scaling residual that a declared
physical model permits to be converted into usable capacity, and \(X_{n+1}\)
is the complete expansion burden. An abstract positive EBU coefficient is not
automatically capacity and must not be relabelled as such.

The demographic bookkeeping remains separately declared:

\[
P_{t+1}=P_t+B_t-D_t^{\mathrm{death}}+M_t,
\]

with births, deaths, and migration allowed to depend on the audited capacity,
service, health, reserve, environmental, institutional, and behavioural state.
Therefore positive net capacity can enable population growth without implying
that it universally causes population growth. The benefit may instead appear
as reserves, resilience, lower burden, improved quality, regeneration, or a
change in demographic behaviour.

For the special two-child recursive capacity law

\[
C_{n+1}=C_n+C_{n-1}+J_n^C-X_{n+1},
\]

if a separately declared demographic response keeps population at
\(P_n=\rho C_n\), then the following conditional projection is exact:

\[
\boxed{
P_{n+1}=P_n+P_{n-1}+\rho\bigl(J_n^C-X_{n+1}\bigr)
}.
\]

This is a testable bridge, not a universal demographic law. It states exactly
which assumptions would allow a recursively generated capacity surplus to
support a Fibonacci-forced population-capacity path.

Stage F must distinguish three preregistered causal arms:

1. population or demand drives topology expansion;
2. topology-generated net capacity permits a demographic response; and
3. population, demand, topology, capacity, and interaction residuals form a
   bidirectional feedback loop.

Controls must include zero and negative \(K^C\), positive residuals that are
not capacity-convertible, benefits allocated to reserves or quality rather than
population, demographic transition, delay, shocks, and nonrecursive topologies.
Only independently audited evidence may determine which direction, if any, is
supported.

## 12. Conditional computational-compression corollary

For the declared ordered Fibonacci substitution family,

\[
N(M_n)=F_{n+1}=\Theta(\varphi^n).
\]

Under all accepted A1–A8 boundary-compression conditions, uniformly bounded
summary size, and uniformly bounded composition cost, summaries through level
\(n\) require \(O(n)\) new compositions. Therefore

\[
\boxed{T_{\mathrm{summary}}=O(\log N)}
\]

in the expanded occurrence count \(N\).

This does not make physical construction, measurement, maintenance, storage,
or arbitrary all-subset reconstruction logarithmic. Without valid structure,
exact arbitrary Boolean Möbius analysis still requires all \(2^N\) subset
values, with a fast transform costing approximately \(O(N2^N)\) arithmetic
operations plus subset-evaluation cost.

## 13. Connection to homeostasis

Growing-system homeostasis must be tested over a moving model, not inferred
from topology compression.

Let

\[
\mathcal V_t=\mathcal V(P_t,D_t,\Theta_t)
\]

be the registered viable region. The trajectory must demonstrate, under the
exact registered conditions,

\[
x_t\in\mathcal V_t
\]

for the declared horizon while accounting for:

- construction and activation delay;
- resource acquisition and depletion;
- reserve margins;
- unmet demand;
- service continuity;
- regeneration;
- congestion and interaction burdens;
- correction actions and receipts;
- shocks and recovery;
- failed or delayed expansion; and
- computational delay in detecting and applying changes.

Topology compression can make adaptation computationally cheaper. It does not
guarantee sufficient physical capacity or homeostasis.

## 14. Registered study design

### Stage D: freeze the questions

The authority should join the existing SD-01, SD-06, SD-07, SD-10, SD-11, and
SD-14 programmes without replacing their accepted evidence:

- SD-01: growing population/demand and moving viability;
- SD-06: direct Möbius and inverse/zeta reconstruction oracle;
- SD-07: recursive Möbius surplus, Fibonacci/Lucas controls, canonical reuse,
  and incremental invalidation;
- SD-10: delayed correction and computational-feedback effects;
- SD-11: complete correction and conservation receipts; and
- SD-14: integrated growing multi-domain scenario.

### Stage E: implement immutable oracles and the harness

Before inspecting scientific outcomes, implement:

- direct expanded evaluation;
- direct Boolean and feasible-poset Möbius oracles;
- inverse/zeta reconstruction;
- recursive reconstruction using recorded \(J_n\);
- canonical-equivalence and A1–A8 certificate validation;
- complete cache keys;
- deterministic invalidation and correction receipts;
- population/demand generators;
- growing-topology generators;
- checkpoint continuation; and
- scientific and computational counters.

### Stage F: execute the registered campaign

Required topology families:

- Fibonacci recursive motifs;
- Lucas-compatible initial conditions;
- other second-order recursive motifs;
- non-Fibonacci substitution systems;
- balanced trees and chains;
- random-recursive structures;
- perturbed near-motifs;
- nonrecursive random topologies; and
- adversarial broad-dependency topologies.

Required demand families:

- fixed;
- linear;
- exponential;
- logistic with declared carrying capacity;
- seasonal or pulsed;
- shocks;
- declining population; and
- adversarial demand.

Required computational arms:

1. complete reconstruction;
2. incremental extension without motif reuse;
3. certified canonical-motif reuse;
4. deliberately incomplete cache key;
5. stale-cache correction control;
6. false canonical-equivalence control; and
7. broad reconfiguration where local reuse should provide little or no gain.

### Required equivalence condition

For every positive reuse disposition,

\[
\boxed{
R_n^{\mathrm{recursive}}
=R_n^{\mathrm{fully\ expanded}}
}
\]

under the exact declared numerical policy. A mismatch is a failure, not an
approximation.

### Scientific measurements

- viability-set membership;
- homeostasis under the registered definition;
- delivered and unmet demand;
- reserves and regeneration;
- recovery time and collapse;
- cumulative burden and loss;
- interaction and correction receipts;
- conservation residuals; and
- sensitivity to expansion delay and topology error.

### Computational measurements

- wall time and CPU time;
- peak memory;
- subset and hyperedge evaluations;
- direct versus reused coefficients;
- canonicalization work;
- cache-hit rate;
- invalidation radius;
- propagation depth;
- storage and trace size; and
- checkpoint/restart accounting.

## 15. Falsifiers

The programme must reject a positive theorem or scientific disposition if:

- recursive reconstruction differs from complete reconstruction;
- a transported coefficient uses an undeclared or empirically selected scaling
  factor;
- a coefficient is scaled by occurrence count despite being intensive,
  boundary-dependent, or non-scalable;
- a nonzero scaling residual is hidden rather than recorded and propagated;
- a reused motif lacks any A1–A8 obligation;
- an old coefficient is reused after a result-affecting change;
- invalidation omits a dependent parent or alias;
- Fibonacci or Lucas behavior is selected only after outcomes are inspected;
- a non-Fibonacci control performs equally while the interpretation claims
  Fibonacci specificity;
- computational work is hidden or measured on incomparable implementations;
- physical construction cost is mislabeled as summary-computation cost;
- topology compression is reported as homeostasis;
- capacity is silently created without a resource or action receipt; or
- a positive interaction or capacity residual is said to ensure population
  growth without an independently declared and tested demographic response;
- positive interaction is presented as causality, fairness, or social benefit.

## 16. Nature as motivation, not authority

Biological growth provides a valuable explanatory analogy because many living
structures expand through repeated local construction rather than demolition
and complete reconstruction.

Sunflower and related flower heads often exhibit clockwise and anticlockwise
parastichy counts that are consecutive Fibonacci numbers. Controlled research
also documents non-Fibonacci and irregular heads. This is a useful accessible
book reference showing why visual resemblance must not be treated as a
universal law. It is not an EBU authority source and does not determine the
mathematical theorem, topology programme, controls, or scientific interpretation.

Useful sources:

- Swinton et al., “Novel Fibonacci and non-Fibonacci structure in the
  sunflower,” *Royal Society Open Science* (2016):
  https://pmc.ncbi.nlm.nih.gov/articles/PMC4892450/
- Zhang et al., “Phyllotactic patterning of gerbera flower heads,”
  *Proceedings of the National Academy of Sciences* (2021):
  https://pmc.ncbi.nlm.nih.gov/articles/PMC8020676/

Horns and other pointed biological structures can display curved, spiral, or
power-law growth generated by differential growth. The stronger statement that
ram horns generally grow according to the Fibonacci sequence is not established
well enough to serve as programme evidence.

- Evans et al., “A universal power law for modelling the growth and form of
  teeth, claws, horns, thorns, beaks, and shells,” *BMC Biology* (2021):
  https://pmc.ncbi.nlm.nih.gov/articles/PMC8008625/

The defensible analogy is therefore:

> Local generative rules can add new structure while preserving and reusing
> earlier organization. EBU tests when an analogous declared recursive
> organization preserves exact results, reduces recomputation, and remains
> physically viable under growing demand.

## 17. Book integration without chapter bloat

No book manuscript should be revised before accepted Stage F execution and
Stage G result audit. The future structure should reserve these placements:

- **Part V:** population, demand growth, moving viability, reserves, expansion
  delay, homeostasis, and the bidirectional capacity-population hypothesis;
- **Part VI:** recursive Möbius surplus theorem, Fibonacci/Lucas projections,
  coefficient transport and scaling residuals, canonical motifs, inverse
  reconstruction, and certified reuse;
- **Part VIII:** a short cross-reference explaining correction propagation,
  invalidation, and feedback delay;
- **Mathematical appendix:** full proofs of the recursive surplus identity,
  forced Fibonacci projection, Lucas corollary, coefficient-transport and
  conditional-scaling results, incremental extension theorem, poset
  generalization, and complexity bounds; and
- **Results chapters:** only independently audited Stage F/G figures, tables,
  run identities, and code/configuration references.

The nature comparison may appear briefly as an accessible supporting example.
It must not be presented as the scientific basis of the programme and must not
replace the theorem, registered controls, or EBU evidence.

The relevant book sequence should culminate in one light synthesis section,
not a disconnected additional chapter:

> Recursive topology may generate net interaction benefits that expand usable
> carrying capacity. Where demographic behaviour responds positively to that
> capacity, the benefit can enable population growth. EBU tests this connection
> rather than presuming it universally.

This conclusion may be expanded into a scientific finding only after Stage F
execution and Stage G audit. Before then it must be labelled as the central
conditional hypothesis. The accompanying reader explanation may state that a
successful system could help create the physical and institutional conditions
under which future generations have meaningful resources available; it must
not promise, guarantee, or centrally determine demographic outcomes.

## 18. Feature value for the reader

This programme gives EBU a precise layered architecture:

- the declared topology states where interactions may exist;
- Möbius coefficients quantify non-additive interactions;
- inverse reconstruction rebuilds the complete declared value;
- recursive motifs describe how larger structures are assembled;
- typed scaling operators describe how eligible coefficients change with scale;
- scaling residuals expose what cannot be inherited from the smaller motif;
- canonical certificates determine when earlier calculations may be reused;
- invalidation propagates corrections to every dependent larger structure;
- population and demand models drive when expansion is needed; and
- net recursive capacity can also be tested as a possible enabler of later
  demographic growth, completing the bidirectional feedback hypothesis; and
- long-run tests determine whether the growing system remains viable.

The milestone is not a universal Fibonacci system. It is an exact way to test
whether recursive structure turns previously verified work into reusable
computational structure without losing EBU accuracy or physical accounting.
