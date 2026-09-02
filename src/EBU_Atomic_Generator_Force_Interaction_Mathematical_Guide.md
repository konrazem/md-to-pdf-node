# EBU from burden to generators and higher-order interaction

## An explanatory mathematical guide to what the new laws give the EBU project

This guide explains a major step in the EBU project. The recent work does much
more than introduce several new formulas. It joins ideas that previously sat
next to one another into one usable mathematical structure:

- a declared burden field says what condition the system is trying to reduce;
- its gradient shows where a small physical change matters most;
- the edge force converts that information into a direction for resource flow;
- the opposition potential determines how much flow the edge can support;
- the generator preserves the identity of a transaction when its extent is
  divided toward zero;
- finite transactions can be reconstructed from those local transformation
  laws;
- recursive boundary equivalence lets a whole subnetwork act as one component;
- interaction coefficients reveal when parallel actions create or destroy
  value together rather than merely adding their separate results; and
- joint feasibility and marginal allocation provide a principled way to share
  a constrained resource among divisible requests.

The central achievement is therefore not “more mathematics.” It is a bridge
from a field describing collective burden to finite, auditable economic
transformations in networks. The bridge tells us how local information becomes
flow, how small transformations accumulate into large actions, how large
subsystems can be compressed safely, and how cooperation among several actions
can be measured without pretending that every group effect is only a sum of
pairs.

Every equation and proof from the earlier technical manuscript is retained.
The presentation now begins each result with the practical question it answers,
then gives the mathematics, then explains the capability that result adds to
EBU. Scope qualifications are collected after the positive result instead of
being allowed to dominate it.

**Document status.** This is a prospective learning guide based on the
atomic-generator and interaction authority candidate. It is not itself
framework authority, an implementation specification, a simulation result, or
empirical validation. That status limits what the document authorizes; it does
not diminish the mathematical results proved inside it.

### What you should understand after reading

You should be able to explain, in ordinary language:

1. why a burden gradient creates a local drive for resource movement;
2. why the flow law is derived from opposition rather than chosen arbitrarily;
3. why an infinitesimal transaction has zero finite size but still contains a
   nonzero transformation law;
4. how that generator reconstructs a finite transaction and its finite EBU;
5. why a long project is a trajectory with commitments, not one mysterious
   jump;
6. how a subgraph can be encapsulated without losing its observable behaviour;
7. how pair, triple, and higher-order cooperation can be separated exactly;
8. when two action groups can truly be solved in parallel; and
9. why allocating a shared resource, identifying physical cause, and deciding
   settlement are three different operations.

---

## Contents

1. [How to read the strength of each result](#1-how-to-read-the-strength-of-each-result)
2. [The complete mathematical chain](#2-the-complete-mathematical-chain)
3. [State, boundary, burden, and marginal burden](#3-state-boundary-burden-and-marginal-burden)
4. [Deriving the EBU edge force](#4-deriving-the-ebu-edge-force)
5. [Deriving the dissipation potential and flow law](#5-deriving-the-dissipation-potential-and-flow-law)
6. [The burden-descent identity](#6-the-burden-descent-identity)
7. [From finite transactions to the economic atom](#7-from-finite-transactions-to-the-economic-atom)
8. [Finite transformation and exact finite EBU](#8-finite-transformation-and-exact-finite-ebu)
9. [Loss, efficiency, and the carrier-limit theorem](#9-loss-efficiency-and-the-carrier-limit-theorem)
10. [Reconstructing finite actions from generators](#10-reconstructing-finite-actions-from-generators)
11. [Long actions as hybrid trajectories](#11-long-actions-as-hybrid-trajectories)
12. [Recursive encapsulation and boundary equivalence](#12-recursive-encapsulation-and-boundary-equivalence)
13. [Finite parallel interaction and Möbius inversion](#13-finite-parallel-interaction-and-möbius-inversion)
14. [Why interaction topology may be a hypergraph](#14-why-interaction-topology-may-be-a-hypergraph)
15. [Local coupling and order effects](#15-local-coupling-and-order-effects)
16. [Shared constraints and marginal allocation](#16-shared-constraints-and-marginal-allocation)
17. [Aumann-Shapley closure and its boundary](#17-aumann-shapley-closure-and-its-boundary)
18. [Interaction preservation under encapsulation](#18-interaction-preservation-under-encapsulation)
19. [Structural additivity under strong separation assumptions](#19-structural-additivity-under-strong-separation-assumptions)
20. [What the new laws resolve](#20-what-the-new-laws-resolve)
21. [What the new structure makes possible next](#21-what-the-new-structure-makes-possible-next)
22. [Proof dependency index](#22-proof-dependency-index)
23. [Notation and explanation order](#23-notation-and-the-mandatory-explanation-order)
24. [Selected mathematical lineage](#24-selected-mathematical-lineage)

---

## 1. How to read the strength of each result

The guide uses a small set of labels so that the reader can see *why* a result
is strong. An exact identity is guaranteed by the definitions. A conditional
theorem supplies a guarantee whenever its stated assumptions hold. An
architectural rule tells the framework what information it must preserve. An
empirical hypothesis tells a later experiment what to measure. These are
different kinds of achievement, not a ranking from strong to unimportant.

| Label | Meaning |
|---|---|
| **Exact identity** | Follows algebraically from the declared definitions. |
| **Conditional theorem** | Proven when the listed mathematical assumptions hold. |
| **EBU architectural rule** | A prospective modeling or authority choice, not a law of nature. |
| **Counterexample** | Shows why a broader or simpler claim is false. |
| **Empirical hypothesis** | Requires a future measurement or discrimination protocol. |
| **Institutional choice** | Requires social authority; it is not selected by physical mathematics. |

For example, Möbius inversion is established mathematics. Using it to define
EBU finite interaction under a frozen subset protocol is an EBU adaptation.
Whether a measured economy has a particular three-way interaction is an
empirical question. Who receives a payment because of that interaction is an
institutional choice.

---

## 2. The complete mathematical chain

The new theory is not a detached research branch. It grows directly from the
earlier EBU burden, marginal, and force construction. The easiest way to see
its importance is to follow one question through the complete chain:

> If the present state contains avoidable collective burden, how can EBU find a
> physically admissible change, carry it out over any duration and scale, and
> measure the complete group result?

Each arrow below answers one part of that question. No arrow is decorative.

~~~mermaid
flowchart LR
    A["Complete state z and boundary"] --> B["Burden V(z)"]
    B --> C["Marginal burden mu = grad V"]
    C --> D["Loss-aware edge force f_e"]
    D --> E["Opposition potential Psi_e"]
    E --> F["Feasible flow J_e"]
    F --> G["State generator G"]
    G --> H["Finite trajectory T_h"]
    H --> I["Exact finite EBU quote"]
    H --> J["Recursive boundary replacement"]
    H --> K["Parallel subset outcomes E(S)"]
    K --> L["Higher-order interactions I_S"]
    L --> M["Hypergraph and shared factors"]
    M --> N["Joint feasible allocation"]
    N --> O["Causal assessment"]
    O --> P["Institutional settlement"]
~~~

The central analytical spine can be written compactly as

$$
V
\longrightarrow
\mu=\nabla V
\longrightarrow
f_e=\mu_i-\eta_e\mu_j
\longrightarrow
\Psi_e
\longrightarrow
J_e
\longrightarrow
G
\longrightarrow
T_h
\longrightarrow
\operatorname{EBU}(T_h;z).
$$

An earlier shorthand wrote the same spine as

$$
V
\longrightarrow
\mu=\nabla V
\longrightarrow
f_e=\mu_i-\eta_e\mu_j
\longrightarrow
\Psi_e
\longrightarrow
J_e
\longrightarrow
G
\longrightarrow
T_h
\longrightarrow
\Delta E_{\mathrm{finite}}.
$$

The refined notation \(G_T\) makes the transaction generator explicit, while
\(\operatorname{EBU}(T_h;z)\) makes clear that the final quantity is evaluated
from the complete finite transformation and starting state.

Read it from left to right:

- (V) describes how much declared burden belongs to a complete state.
- (mu=\nabla V) measures how sensitive that burden is to a small change in
  each state coordinate.
- (f_e) asks whether moving carrier along one lossy edge lowers burden.
- (Psi_e) describes how opposition accumulates as flow increases.
- (J_e) is the flow selected when the drive overcomes that opposition.
- (G_T) is the local transformation law: the transaction's effect per unit
  of its declared extent.
- (T_h) is the complete finite transformation reconstructed from the local
  law, including any declared jumps or mode changes.
- (operatorname{EBU}(T_h;z)=V(z)-V(T_h(z))), with any separate
  non-overlapping process account, measures the finite result.

This sequence is valuable because it removes an old discontinuity in the
theory. EBU no longer has to jump from “the burden points in this direction”
to “a large transaction happened.” The generator supplies the missing middle:
it explains how the state starts changing, and finite reconstruction explains
how those local changes become the complete transaction.

The central interaction extension is

$$
\{T_h^a\}_{a\in N}
\longrightarrow
\{E(S):S\subseteq N\}
\longrightarrow
\{I_S:S\subseteq N\}
\longrightarrow
\text{interaction hypergraph}.
$$

The rest of the document proves each arrow or states precisely which future
theorem or experiment is still required.

### A familiar example before the formal derivation

Imagine a water network. One reservoir is so depleted that removing one more
litre would sharply increase collective burden. Another reservoir can receive
water, but only 90 percent of what leaves the source arrives because the pipe
leaks. The burden gradient measures the importance of a litre at each
reservoir. The loss-aware force compares the litre removed from the source
with the 0.9 litre actually delivered. The opposition potential represents the
fact that forcing more water through the pipe becomes harder. The flow law
selects the rate. The generator then says how every relevant stock, reserve,
loss coordinate, and commitment changes per second. Composing that local law
over an hour gives the finite transfer, and comparing the complete start and
end states gives its finite EBU.

The later interaction theory asks a second question: what if the useful result
requires the pump, the pipe operator, and a treatment unit together? By
evaluating all declared subsets under one frozen protocol, EBU can identify a
genuine three-way result that no pair produces. This is why the extension from
ordinary graphs to interaction hypergraphs is substantive, not cosmetic.

---

## 3. State, boundary, burden, and marginal burden

### What this gives EBU

This first law gives EBU a common place from which every later decision can be
derived: the complete represented state. Instead of assigning value directly
to an isolated action, EBU asks how the action changes the condition of the
whole declared system. That is a decisive difference. The same delivery can be
valuable when a destination is depleted, unnecessary when it is full, or
harmful when it consumes a protected reserve at the source. The value is not a
permanent label attached to the object; it comes from the state transition.

The burden field \(V\) gathers the declared physical pressures into one
auditable comparison. Its gradient \(\mu\) then reveals the local sensitivity of
that comparison. In practical terms, \(V\) is the landscape and \(\mu\) tells us
how steeply the landscape changes near the current state.

### 3.1 What are we trying to determine?

We want to compare two represented states and ask which one carries more
declared burden. A *state* must contain every variable needed by the claim being
made. A *boundary* states which inputs, outputs, losses, commitments, and
observations belong to the represented component.

Let

$$
z=(z_1,\ldots,z_m)\in\mathcal Z
$$

be the complete represented state. The state may include stocks, reserves,
loss coordinates, in-transit quantities, commitments, queue contents, clocks,
modes, or controller memory.

Let

$$
V:\mathcal Z\rightarrow\mathbb R
$$

be the declared burden functional. Smaller \(V\) means less represented
burden under the current field version. It does **not** automatically mean
lower thermodynamic energy, greater utility, or greater moral worth.

When \(V\) is differentiable, define

$$
\mu(z)=\nabla V(z),
\qquad
\mu_i(z)=\frac{\partial V}{\partial z_i}(z).
$$

If \(V\) is measured in burden units \(B\) and \(z_i\) is measured in carrier
units \(U_i\), then

$$
[\mu_i]=B/U_i.
$$

Thus \(\mu_i\) answers:

> For a very small increase in coordinate \(z_i\), how rapidly does the
> declared burden change?

### 3.2 Directional derivative

For a small admissible change \(\varepsilon d\), differentiability gives

$$
V(z+\varepsilon d)
=V(z)+\varepsilon\,DV(z)[d]+o(\varepsilon),
$$

where

$$
DV(z)[d]=\nabla V(z)^\top d=\mu(z)^\top d.
$$

This is the first bridge from a state burden to an action: an action supplies a
direction \(d\), and the marginal burden evaluates that direction.

### 3.3 Separable local fields

The existing local EBU construction often uses

$$
V(z)=\sum_{k=1}^m v_k(z_k).
$$

Then

$$
\mu_k=v_k'(z_k).
$$

If an action changes only coordinates \(i\) and \(j\), every unaffected term
cancels in the exact finite difference:

$$
\begin{aligned}
V(z)-V(z+d)
&=\sum_k v_k(z_k)-\sum_k v_k(z_k+d_k)\\
&=v_i(z_i)+v_j(z_j)-v_i(z_i+d_i)-v_j(z_j+d_j),
\end{aligned}
$$

provided \(d_k=0\) for \(k\notin\{i,j\}\).

This proves exact locality for that separable field. It is not an approximation.

### 3.4 Numerical picture

Suppose one state coordinate \(x\) is the amount by which a source lies below
its certified reserve, and let its burden contribution be

$$
v(x)=\frac{x^2}{2}.
$$

At \(x=2\),

$$
\mu(x)=v'(x)=x=2.
$$

An additional shortage of \(0.1\) unit therefore raises burden initially by
about

$$
2\times0.1=0.2.
$$

At \(x=10\), the same additional shortage raises it initially by about \(1\).
The equation is expressing an intuitive EBU feature: taking one more unit from
a severely depleted source matters more than taking it from a source close to
its safe condition.

---

## 4. Deriving the EBU edge force

### What this gives EBU

The gradient alone says where burden is sensitive; it does not yet say whether
a particular transfer helps. The edge-force law performs that conversion. It
compares what is removed from the source with what actually arrives at the
destination after loss. The result is a local, direction-specific reason to
move or not move the carrier.

This gives EBU a principled answer to “which way should the resource go?” The
answer is not based only on scarcity at the destination, and it is not based
only on abundance at the source. It depends on both ends and on the physical
efficiency of the route joining them.

### 4.1 The physical edge direction

Consider a directed edge \(e:i\to j\). A unit of carrier leaves the source,
but only \(\eta_e\in[0,1]\) units arrive at the destination. Define the edge
incidence direction

$$
S_e=-e_i+\eta_e e_j,
$$

where \(e_i\) and \(e_j\) are coordinate basis vectors.

For a small transferred carrier amount \(dq\),

$$
dz=S_e\,dq.
$$

The marginal change of burden is

$$
dV=DV(z)[S_e]\,dq.
$$

Since

$$
DV(z)[S_e]
=\mu(z)^\top(-e_i+\eta_e e_j)
=-\mu_i+\eta_e\mu_j,
$$

we define the loss-aware EBU edge force

$$
\boxed{
f_e(z)=\mu_i(z)-\eta_e\mu_j(z).
}
$$

Therefore

$$
\boxed{
dV=-f_e(z)\,dq.
}
$$

### 4.2 Proof of the sign

If \(f_e>0\), then for a small positive transfer \(dq>0\),

$$
dV=-f_e\,dq<0.
$$

The transfer locally lowers declared burden. If \(f_e<0\), the same small
transfer locally raises burden.

The efficiency factor belongs inside the force because the destination receives
only \(\eta_e dq\). A loss-blind difference \(\mu_i-\mu_j\) would value carrier
that never arrives as though it had reached the destination.

### 4.3 Units

When source and destination use the same carrier unit \(U\),

$$
[f_e]=B/U.
$$

Multiplying by transferred carrier gives burden:

$$
[f_e\,dq]=(B/U)U=B.
$$

This is why the force is the exact local marginal of the finite EBU field
difference along that edge.

### 4.4 Diagram

~~~mermaid
flowchart LR
    S["Source i<br/>marginal burden mu_i"]
    D["Destination j<br/>marginal burden mu_j"]
    L["Explicit loss coordinate<br/>(1 - eta_e) dq"]
    S -- "dq leaves" --> D
    S -- "carrier not delivered" --> L
    D -- "eta_e dq is received" --> R["Destination state after receipt"]
~~~

The diagram is schematic. A complete implementation must not count the same
loss both in state and in a separate process account.

### 4.5 Small example: a useful destination can still be too costly

Let the source marginal burden be \(\mu_i=8\), the destination marginal burden
be \(\mu_j=10\), and the delivery efficiency be \(\eta_e=0.9\). Then

$$
f_e=8-0.9(10)=-1.
$$

A small transfer in the declared direction raises burden, because the value of
the delivered \(0.9\) unit does not compensate for removing one full unit from
the source. If instead the source marginal burden were \(12\), then

$$
f_e=12-0.9(10)=3,
$$

and a small transfer would lower burden. This is a strong feature of the law:
route loss can reverse a decision that would look beneficial in a
destination-only model.

---

## 5. Deriving the dissipation potential and flow law

### What this gives EBU

The edge force tells us that movement is locally helpful, but it does not tell
us how large the flow should be. The opposition potential fills that gap. It
represents two familiar facts: an edge may require a minimum drive before
anything moves, and increasing the rate may become progressively harder.

The resulting flow is not an arbitrary command. It is the unique balance
between the benefit of following the burden-reducing drive and the accumulated
opposition to producing flow. This is why introducing \(\Psi_e\) is useful even
though the final formula for \(J_e\) is simple: \(\Psi_e\) gives the formula an
optimization and dissipation foundation.

### 5.1 Start from marginal opposition

Suppose edge \(e\) has mobility \(M_e>0\) and threshold opposition
\(\theta_e\ge0\). The declared marginal opposition at nonnegative flow \(J_e\)
is

$$
r_e(J_e)=\theta_e+\frac{J_e}{M_e}.
$$

The threshold is the opposition that must be overcome before flow begins. The
linear term makes additional flow progressively harder.

### 5.2 Derive the potential by integration

Define accumulated opposition from zero flow to \(J_e\):

$$
\begin{aligned}
\Psi_e(J_e)
&=\int_0^{J_e}r_e(j)\,dj\\
&=\int_0^{J_e}\left(\theta_e+\frac{j}{M_e}\right)dj\\
&=\boxed{\theta_eJ_e+\frac{J_e^2}{2M_e}}.
\end{aligned}
$$

Differentiation recovers marginal opposition:

$$
\boxed{
\Psi_e'(J_e)=\theta_e+\frac{J_e}{M_e}=r_e(J_e).
}
$$

The factor \(1/2\) is present because

$$
\frac{d}{dJ}\frac{J^2}{2M}=\frac{J}{M}.
$$

It has no additional mysterious physical meaning here.

### 5.3 Convexity proof

For \(M_e>0\),

$$
\Psi_e''(J_e)=\frac1{M_e}>0.
$$

Therefore \(\Psi_e\) is strictly convex. The edge-flow optimization below has a
unique minimizer over the closed convex set \(J_e\ge0\).

### 5.4 Derive the thresholded flow law using KKT conditions

The edge selects nonnegative flow by minimizing

$$
\Phi_e(J_e)=\Psi_e(J_e)-f_eJ_e,
\qquad J_e\ge0.
$$

The first term is accumulated opposition. The second is the driving
contribution. Write the inequality as \(-J_e\le0\), with multiplier
\(\lambda_e\ge0\). The Lagrangian is

$$
\mathcal L(J_e,\lambda_e)
=\Psi_e(J_e)-f_eJ_e-\lambda_eJ_e.
$$

The KKT conditions are

$$
\begin{aligned}
&J_e\ge0,\qquad \lambda_e\ge0,\\
&\theta_e+\frac{J_e}{M_e}-f_e-\lambda_e=0,\\
&\lambda_eJ_e=0.
\end{aligned}
$$

There are two cases.

#### Case 1: active positive flow

If \(J_e>0\), complementary slackness gives \(\lambda_e=0\). Hence

$$
\theta_e+\frac{J_e}{M_e}-f_e=0,
$$

so

$$
J_e=M_e(f_e-\theta_e).
$$

This case is possible only when \(f_e>\theta_e\).

#### Case 2: inactive edge

If \(J_e=0\), stationarity gives

$$
\lambda_e=\theta_e-f_e.
$$

Dual feasibility requires \(\lambda_e\ge0\), hence \(f_e\le\theta_e\).

Combining both cases gives

$$
\boxed{
J_e=M_e[f_e-\theta_e]_+,
}
$$

where \([a]_+=\max(a,0)\).

### 5.5 Numerical example

Let

$$
M_e=0.5,
\qquad
\theta_e=1,
\qquad
f_e=5.
$$

Then

$$
J_e=0.5(5-1)=2.
$$

At \(J_e=2\), marginal opposition is

$$
r_e(2)=1+\frac{2}{0.5}=5=f_e.
$$

The selected positive flow is exactly where driving force equals marginal
opposition.

~~~mermaid
xychart-beta
    title "Objective Phi(J) = Psi(J) - 5J for M=0.5 and theta=1"
    x-axis "flow J" [0, 1, 2, 3, 4]
    y-axis "Phi(J)" -4 --> 1
    line [0, -3, -4, -3, 0]
~~~

The graph has its unique minimum at \(J=2\).

### 5.6 Why this result matters

The construction gives EBU three things at once:

1. a zero-flow region when the drive is too weak;
2. a unique positive flow when the threshold is exceeded; and
3. a transparent explanation of every parameter in the law.

It stands in the broad force-flux and dissipation tradition associated with
irreversible-process mathematics. In EBU, however, \(V\) remains the declared
burden field and \(M_e\) remains the declared mobility of the EBU edge. This
short scope distinction keeps the analogy precise without weakening the result
derived above.

---

## 6. The burden-descent identity

### What this gives EBU

This identity is the first built-in directional guarantee of the flow model.
When no separate natural or on-site drive acts, the continuous flow selected
by the local law cannot increase the declared burden. Every active edge pays a
nonnegative threshold term and a nonnegative rate-dependent term. In ordinary
language, the network cannot move “uphill” in its own declared burden landscape
while still claiming to follow this constitutive law.

That makes the flow law more than a convenient response curve. It connects
local edge decisions to a system-level monotonic property.

### 6.1 Network dynamics

Let \(S\) be the matrix whose columns are the edge directions \(S_e\). Let
\(J\) be the vector of edge flows and \(u(z)\) an on-site or natural drive. The
continuous state law is

$$
\dot z=u(z)+S J(z).
$$

For differentiable \(V\), the chain rule gives

$$
\frac{dV}{dt}
=\mu(z)^\top u(z)+\mu(z)^\top S J(z).
$$

For one edge,

$$
\mu^\top S_eJ_e
=(-\mu_i+\eta_e\mu_j)J_e
=-f_eJ_e.
$$

Summing over edges,

$$
\frac{dV}{dt}
=\mu^\top u-\sum_e f_eJ_e.
$$

### 6.2 Substitute the active flow relation

For every active edge \(J_e>0\),

$$
f_e=\theta_e+\frac{J_e}{M_e}.
$$

Therefore

$$
f_eJ_e
=\theta_eJ_e+\frac{J_e^2}{M_e}.
$$

Inactive edges have \(J_e=0\) and contribute zero. Hence

$$
\boxed{
\frac{dV}{dt}
=\mu^\top u
-\sum_e\left(
\theta_eJ_e+\frac{J_e^2}{M_e}
\right).
}
$$

If \(u=0\), then

$$
\frac{dV}{dt}\le0.
$$

Thus the continuous unconstrained flow does not increase the declared burden.

### 6.3 Why the quadratic term differs from \(\Psi\)

Notice that

$$
\Psi_e(J_e)=\theta_eJ_e+\frac{J_e^2}{2M_e},
$$

while

$$
f_eJ_e=\theta_eJ_e+\frac{J_e^2}{M_e}.
$$

There is no contradiction. \(\Psi\) is accumulated opposition. Its derivative
is marginal opposition. At the optimum, force equals the derivative, so the
drive term is \(J\Psi'(J)\), not \(\Psi\) itself.

### 6.4 From a continuous law to a safe numerical step

The continuous derivative identity does not automatically prove a finite
explicit-Euler step decreases \(V\). If \(\nabla V\) is \(L_V\)-Lipschitz, the
descent lemma gives

$$
V(z+\Delta t\,g)
\le
V(z)+\Delta t\,\mu(z)^\top g
+\frac{L_V\Delta t^2}{2}\lVert g\rVert^2,
$$

where \(g=u+SJ\). The final term is a finite-step remainder. A safe timestep
must make the negative first-order dissipation dominate that remainder.

This remainder does not cancel the achievement. It tells an implementation
exactly what extra check is needed when a continuous law is approximated by
finite computer steps. Local descent is already proved for the declared
continuous model; timestep control extends that property to a numerical
update. Long-run stability is a later theorem because it concerns an entire
history rather than one local direction.

---

## 7. From finite transactions to the economic atom

### What this discovery gives EBU

This is the central new bridge in the theory.

EBU already had finite transactions: transfer five units, operate for one
hour, complete one delivery. The unresolved question was what remains when
such a transaction is divided more and more finely. The answer is not a
smallest positive apple, coin, actor, or physical object. The finite size tends
to zero, but the transaction's *rate of changing the complete state* can
converge to a definite law. That law is the generator \(G_T\).

The closest familiar analogy is velocity. Over a vanishingly short interval, a
moving car covers almost zero distance. Yet

$$
\text{velocity}
=\lim_{\Delta t\to0}
\frac{\text{change in position}}{\Delta t}
$$

can remain nonzero and tells us how the car is moving. The EBU generator does
the same for a transaction, except that the “position” is the complete economic
state: stocks, losses, reserves, commitments, queues, modes, and every other
coordinate needed by the model.

This gives the economic atom a precise meaning:

> An economic atom is the limiting local transformation law obtained when the
> extent of a continuously refinable transaction tends to zero.

The atom has almost zero finite effect, but it does not contain zero
information. Its information is the direction and rate with which it begins to
change the state. Two transactions can both approach the identity
\(T_0=I\), both have vanishing finite loss, and still remain different because
their generators differ:

$$
G_A\ne G_B.
$$

This resolves the earlier search for a universal smallest finite economic
object. What is universal is the limiting form; what distinguishes
transactions is the local law that survives the limit.

### 7.1 Finite transformation family

Let \(T_h:\mathcal Z\to\mathcal Z\) denote the finite state transformation for
declared extent \(h\ge0\), with

$$
T_0=I.
$$

The extent might be time, route or process extent, typed carrier quantity, or
dimensionless participation in one frozen finite bundle.

For example, \(T_{10}(z)\) could mean the complete state after ten minutes of a
certified process. \(T_{0.01}(z)\) is the same process observed over a much
smaller interval. The identity \(T_0=I\) says that a zero-length participation
does not change the state.

### 7.2 Definition of the economic atom

When the right derivative exists in a declared topology, define

$$
\boxed{
G_T(z)=\lim_{h\downarrow0}\frac{T_h(z)-z}{h}.
}
$$

This quotient asks: after removing the shrinking size \(h\), what
transaction-specific change remains per unit of \(h\)? Its limit is the EBU
economic atom—the local state-transformation law.

It is not a smallest positive transaction. A finite transaction may be valid
even when this derivative does not exist.

### 7.3 First-order expansion proof

By the definition of the derivative,

$$
\frac{T_h(z)-z}{h}-G_T(z)\to0.
$$

Define

$$
r_z(h)=\frac{T_h(z)-z}{h}-G_T(z).
$$

Then \(r_z(h)\to0\), and

$$
T_h(z)-z=hG_T(z)+hr_z(h).
$$

Because \(hr_z(h)=o_z(h)\),

$$
\boxed{
T_h(z)=z+hG_T(z)+o_z(h).
}
$$

The finite effect \(T_h(z)-z\) tends to zero, but its rate per unit extent can
remain finite and transaction-specific.

That last sentence is the key. Dividing a transaction does not erase its
identity. It separates *how much of it occurs* from *what kind of change it
produces per unit*.

### 7.4 Connection to the EBU flow law

The network state law is

$$
\dot z=u(z)+S J(z).
$$

Therefore the time-coordinate generator is

$$
\boxed{
G_t(z)=u(z)+S J(z).
}
$$

But \(J\) is produced by the force law

$$
J_e=M_e[\mu_i-\eta_e\mu_j-\theta_e]_+.
$$

Hence, with the understood loss-aware edge orientation,

$$
\boxed{
G_t(z)
=u(z)+S\,M[\,f(z)-\theta\,]_+.
}
$$

This proves the direct connection:

> The economic atom is not added after the force-flux law. The force-flux law
> determines part of the local state generator carried by each infinitesimal
> time or participation interval.

For carrier quantity \(q\) on one edge,

$$
\frac{dz}{dq}=S_e.
$$

For time \(t\),

$$
\frac{dz}{dt}=S_eJ_e+\text{other active terms}.
$$

The quantity generator and state-transformation generator are distinct but
linked by incidence and constitutive laws.

In ordinary language, the earlier EBU chain now closes locally:

1. the burden field creates marginal burdens;
2. their loss-aware difference creates an edge force;
3. force and opposition determine flow;
4. flow changes the state; and
5. that complete instantaneous state change is the generator.

So \(G_T\) is not an additional score placed beside EBU. It is the mathematical
form of the state change that the already-derived EBU force and flow initiate.

### 7.5 Reparameterization proof

Let \(\tilde h=\phi(h)\), where \(\phi\) is positive, \(C^1\), and locally
invertible. The chain rule gives

$$
\frac{dT}{d\tilde h}
=\frac{dT}{dh}\frac{dh}{d\tilde h}.
$$

Thus

$$
\boxed{
G_{\tilde h}=G_h\frac{dh}{d\tilde h}.
}
$$

The integrated finite change is invariant:

$$
\int_{h_0}^{h_1}G_h\,dh
=\int_{\tilde h_0}^{\tilde h_1}
G_h(h(\tilde h))\frac{dh}{d\tilde h}\,d\tilde h.
$$

For example, if \(\tilde h=2h\), then

$$
G_{\tilde h}=\frac12G_h,
$$

while the integrated state change is unchanged.

### 7.6 The transaction has not disappeared

The generator gives EBU a local law that can be composed, compared, and tested.
The finite transaction still supplies the amount, duration, endpoints, and
observable result. The operational lifecycle also remains useful because each
stage answers a different practical question:

- the finite requested quantity;
- physical permission and reservation;
- institutional acceptance;
- actual execution;
- measurement and physical receipt;
- causal assessment; or
- settlement.

The finite lifecycle remains:

~~~mermaid
flowchart LR
    A["Request"] --> B["Permission / reservation"]
    B --> C["Quote"]
    C --> D["Acceptance"]
    D --> E["Execution"]
    E --> F["Measurement"]
    F --> G["Physical receipt"]
    G --> H["Causal assessment"]
    H --> I["Settlement"]
~~~

Differential atomicity and commit atomicity are different concepts. The first
describes a limit. The second describes an all-or-none state transition or
recording operation.

This separation is an advantage. EBU can divide the physical or mathematical
evolution as finely as required without pretending that a contract, permission,
or durable record must also be divided into infinitely many approvals.

---

## 8. Finite transformation and exact finite EBU

### What this gives EBU

The generator tells us how a transaction starts changing the state. A finite
transition tells us where the complete process actually ends. EBU evaluates the
finite result by comparing the burden of the relevant no-action state with the
burden of the actual finite successor:

$$
\boxed{
\operatorname{EBU}(T_h;z)
=V(z)-V(T_h(z)),
}
$$

before adding or subtracting any separately declared process account that is
not already present in the state comparison.

This endpoint definition is intentionally simple. It means that a long
transaction is not valued by multiplying its first instant by its entire
duration. The model follows or reconstructs the finite transformation, reaches
the complete successor state, and then compares the two states. The following
path-integral proof is a useful smooth special case: it shows that the same
finite difference can also be understood as the accumulation of changing
marginal force along the route.

### 8.1 The generator-to-finite-to-EBU sequence

When the required reconstruction assumptions hold, divide the extent \(h\)
into a partition

$$
\mathcal P=\{0=h_0<h_1<\cdots<h_n=h\},
\qquad
\Delta h_k=h_k-h_{k-1}.
$$

Successive local transformations reconstruct the finite map:

$$
\boxed{
T_h
=\lim_{\lVert\mathcal P\rVert\to0}
T_{\Delta h_n}\circ\cdots\circ T_{\Delta h_1}.
}
$$

The result is then evaluated by the endpoint burden difference
\(V(z)-V(T_h(z))\). This is the clean logical order:

$$
\boxed{
G_T
\longrightarrow
T_h
\longrightarrow
\operatorname{EBU}(T_h;z).
}
$$

Section 10 explains the reconstruction conditions for linear, nonlinear,
time-dependent, and hybrid transformations.

### 8.2 No-action and action states

Let \(z\) be the frozen no-action successor for the current quote interval. A
finite accepted rate \(q\ge0\) over duration \(\Delta t\) changes the state by

$$
z(q)=z+\Delta t\,S_e q.
$$

Let \(C_a(q)\ge0\) be a separately declared action-process burden that is not
already represented by the state difference. The exact signed quote is

$$
\boxed{
\Delta E_{\mathrm{quote}}(q)
=V_{\mathrm{loc}}(z)-V_{\mathrm{loc}}(z(q))-C_a(q).
}
$$

Positive \(\Delta E\) means the action lowers more represented burden than its
declared non-overlapping process burden. Physical permission remains a separate
condition.

### 8.3 The smooth edge-path proof

Differentiate \(V(z(q))\) with respect to \(q\):

$$
\begin{aligned}
\frac{d}{dq}V(z(q))
&=DV(z(q))[\Delta t\,S_e]\\
&=\Delta t\,\mu(z(q))^\top S_e\\
&=-\Delta t\,f_e(z(q)).
\end{aligned}
$$

Integrating from \(0\) to \(q\),

$$
V(z(q))-V(z)
=-\int_0^q\Delta t\,f_e(z(s))\,ds.
$$

Therefore

$$
\boxed{
V(z)-V(z(q))
=\int_0^q\Delta t\,f_e(z(s))\,ds.
}
$$

and

$$
\boxed{
\Delta E_{\mathrm{quote}}(q)
=\int_0^q\Delta t\,f_e(z(s))\,ds-C_a(q).
}
$$

This equality gives a second, physically intuitive reading of the endpoint
comparison:

> The finite EBU field quote is the accumulated marginal EBU force along the
> actual accepted transaction path, minus a non-overlapping action-process
> burden.

The endpoint formula remains primary because it also makes sense when a simple
smooth path integral is unavailable. The integral is valuable because it shows
why the local marginal force cannot be treated as a separate idea: its changing
value accumulates into the finite field difference.

### 8.4 Why the initial marginal can overquote

The first-order approximation is

$$
\Delta E_{\mathrm{lin}}(q)
=\Delta t\,qf_e(z)-C_a(q).
$$

It freezes the force at the starting state. The exact quote updates the force
continuously along the finite path.

Let

$$
\psi(q)=V_{\mathrm{loc}}(z+\Delta t\,S_e q).
$$

If \(V_{\mathrm{loc}}\) is convex, then \(\psi\) is convex because it is a
convex function composed with an affine map. Convexity gives the tangent
inequality

$$
\psi(q)\ge\psi(0)+q\psi'(0).
$$

Now

$$
\psi'(0)=-\Delta t f_e(z).
$$

Hence

$$
V(z)-\psi(q)
\le
\Delta t\,qf_e(z).
$$

Subtract the same \(C_a(q)\) from both sides:

$$
\boxed{
\Delta E_{\mathrm{quote}}(q)
\le
\Delta E_{\mathrm{lin}}(q).
}
$$

Thus the initial marginal is an upper bound on finite burden relief under these
convexity assumptions. It generally is not the finite result.

For a familiar picture, imagine draining water from a full tank into an empty
one. The first litre may create a large improvement. As the source empties and
the destination fills, the next litre can matter less. Multiplying the value of
the first litre by one thousand would ignore the changing state. Integrating
the updated marginal—or simply evaluating the exact endpoint difference—keeps
that curvature.

### 8.5 No-double-count rule

If a physical effect already appears in

$$
V(z)-V(z(q)),
$$

it must not be charged again in \(C_a(q)\). Loss may be represented in state or
in a separate process account, but not twice.

~~~mermaid
flowchart TD
    A["Frozen present data"] --> B["No-action successor z"]
    B --> C["Accepted finite path z(s)"]
    C --> D["Endpoint z(q)"]
    B --> E["Exact field difference V(z)-V(z(q))"]
    C --> F["Integral of marginal force along path"]
    E <--> F
    E --> G["Subtract non-overlapping C_a(q)"]
    G --> H["Exact signed EBU quote"]
~~~

---

## 9. Loss, efficiency, and the carrier-limit theorem

### What this gives EBU

This theorem explains an apparent paradox at the atomic limit. As the extent
of a continuous carrier process shrinks, its finite useful loss can vanish and
its finite efficiency can approach one. Yet the process is not “perfect” over a
finite distance or duration. A nonzero local loss rate survives and accumulates.

This gives EBU a consistent way to move between microscopic and macroscopic
descriptions:

- the infinitesimal element approaches the identity;
- its generator still records how state changes;
- its loss density still records how efficiency begins to decline; and
- composing many elements reconstructs the finite transformation and finite
  efficiency.

The result is particularly useful for routes and long processes. Losses from
successive segments do not have to be handled as unrelated percentages. Their
logarithmic loss measures add, while their efficiencies multiply.

### 9.1 Why absolute loss is not enough

Suppose a small transaction carries \(C(h)>0\) useful input and loses
\(L(h)\ge0\). If efficiency is

$$
\eta(h)=1-\frac{L(h)}{C(h)},
$$

then

$$
\eta(h)\to1
\quad\Longleftrightarrow\quad
\frac{L(h)}{C(h)}\to0.
$$

This equivalence follows immediately by subtracting from one.

#### Counterexample

Let

$$
C(h)=h,
\qquad
L(h)=0.2h.
$$

Then \(L(h)\to0\), but

$$
\eta(h)=1-0.2=0.8.
$$

Therefore \(L(h)\to0\) alone does not imply unit efficiency.

### 9.2 Carrier-limit theorem with multiplicative efficiency

Suppose an interval-indexed carrier transformation has efficiency
\(\eta(I)\in(0,1]\) and satisfies serial composition

$$
\eta(I\mathbin{\|}J)=\eta(I)\eta(J)
$$

for consecutive intervals. Define

$$
\mu_L(I)=-\log\eta(I).
$$

The subscript \(L\) distinguishes this logarithmic loss measure from the EBU
marginal burden \(\mu=\nabla V\).

Because \(0<\eta(I)\le1\),

$$
\mu_L(I)\ge0.
$$

Serial composition gives

$$
\begin{aligned}
\mu_L(I\mathbin{\|}J)
&=-\log(\eta(I)\eta(J))\\
&=-\log\eta(I)-\log\eta(J)\\
&=\mu_L(I)+\mu_L(J).
\end{aligned}
$$

Hence logarithmic loss is additive, and

$$
\boxed{
\eta(I)=e^{-\mu_L(I)}.
}
$$

If \(\mu_L\) is finite and nonatomic with respect to shrinking intervals, then

$$
|I|\to0
\quad\Longrightarrow\quad
\mu_L(I)\to0.
$$

By continuity of the exponential,

$$
\boxed{
\eta(I)=e^{-\mu_L(I)}\to1.
}
$$

This is the rigorous carrier-limit result.

#### Numerical picture

Suppose the local logarithmic loss density is constant,
\(\ell=0.02\) per kilometre. Over a very small segment \(ds\),

$$
\eta(ds)=e^{-0.02ds}\approx1-0.02ds.
$$

For \(ds=0.001\) kilometre, the efficiency is approximately \(0.99998\), very
close to one. Over 10 kilometres, however,

$$
\eta(10)=e^{-0.2}\approx0.8187.
$$

The atomic element loses almost nothing by itself, but the local tendency to
lose carrier remains present and produces a substantial finite effect after
composition. This is precisely why “efficiency tends to one” does not mean
“finite transactions have no loss.”

### 9.3 What survives at the limit

Although finite loss tends to zero,

$$
\mu_L(I)\to0,
$$

the density can remain nonzero. If

$$
\mu_L([s,s+ds])=\ell(s)ds+o(ds),
$$

then

$$
\eta([s,s+ds])
=e^{-\ell(s)ds+o(ds)}
=1-\ell(s)ds+o(ds).
$$

The atom has unit efficiency in the limiting finite sense while retaining a
nonzero local loss rate \(\ell(s)\). Finite efficiency over \([0,S]\) is

$$
\eta([0,S])
=\exp\left(-\int_0^S\ell(s)\,ds\right).
$$

### 9.4 Fixed activation loss is different

If every nonzero action pays fixed loss \(K>0\), then no continuous density can
represent it at \(h=0\). Charging \(K\) to every one of \(n\) refined segments
would produce \(nK\), so refinement would change the transaction.

The correct hybrid representation is

$$
\text{one activation jump }K
+
\int_0^S\ell(s)\,ds.
$$

This proves why the loss-scaling and hybrid-action laws must be taught
together.

---

## 10. Reconstructing finite actions from generators

The derivative tells us the local tendency. A separate reconstruction theorem
is required to recover a finite transformation.

### What this gives EBU

The generator would be only a local description if EBU could not recover a
complete action from it. Reconstruction is what turns atomic divisibility into
a working multiscale model. It allows a process to be studied at a fine scale,
then composed into a minute, an hour, a route, a factory, or an encapsulated
parent component without changing the declared mathematics.

The four cases below also prevent a common mistake: there is no single formula
for every kind of evolution. A constant linear process, a state-dependent
process, a time-dependent process, and a process containing discrete mode
changes require different reconstruction tools. The achievement is not one
magic exponential; it is a precise map from each type of local law to its valid
finite construction.

### 10.1 Autonomous linear evolution

If the state space is finite-dimensional and

$$
\dot z=Az
$$

with constant matrix \(A\), define

$$
T_h=e^{hA}
=\sum_{n=0}^\infty\frac{h^nA^n}{n!}.
$$

Termwise differentiation gives

$$
\frac{d}{dh}e^{hA}
=Ae^{hA}
=e^{hA}A.
$$

Also \(e^{0A}=I\). Therefore

$$
z(h)=e^{hA}z(0)
$$

solves the linear system. Serial composition follows because the same matrix
commutes with itself:

$$
e^{(h+k)A}=e^{hA}e^{kA}.
$$

For unbounded operators in infinite-dimensional spaces, an operator domain and
strongly continuous semigroup theory are required. The naive power series is
not automatically valid.

### 10.2 Nonlinear autonomous evolution

For

$$
\dot z=G(z),
$$

the finite transformation is the nonlinear flow

$$
T_h(z_0)=z(h;z_0).
$$

Local Lipschitz regularity of \(G\) is a standard sufficient condition for
local existence and uniqueness. Under uniqueness,

$$
T_{h+k}=T_h\circ T_k
$$

whenever both sides exist.

The finite map is generally **not**

$$
e^{hG}
$$

in the ordinary matrix sense, because \(G\) is state-dependent rather than a
constant linear operator.

### 10.3 Nonautonomous evolution

For

$$
\dot z=G(z,s),
$$

the transformation depends on both start and end coordinates:

$$
U(s_1,s_0).
$$

Its composition rule is ordered:

$$
U(s_2,s_0)=U(s_2,s_1)U(s_1,s_0).
$$

Even for a linear system \(\dot z=A(s)z\), one may not replace the ordered
evolution by

$$
\exp\left(\int A(s)\,ds\right)
$$

unless the required commutation conditions hold.

### 10.4 Hybrid evolution

A hybrid action combines discrete jumps and continuous flows. A schematic
finite action is

$$
T
=F_{\mathrm{after}}
\circ J_{\mathrm{mode}}
\circ F_{\mathrm{before}},
$$

where \(J_{\mathrm{mode}}\) is a discrete state or commitment change and the
\(F\) terms are continuous within-mode flows.

The order is part of the declaration because function composition is generally
noncommutative.

#### Example: starting a production line

Turning on a machine may immediately reserve material, create a contractual
commitment, and pay a fixed startup loss. That is the jump
\(J_{\mathrm{mode}}\). Once active, the machine transforms inputs continuously;
that is \(F_{\mathrm{after}}\). Treating the startup cost as though it occurred
inside every tiny time segment would duplicate it. Treating the continuous
operation as one indivisible jump would hide how stocks and losses develop.
The hybrid composition keeps both parts and their order.

### 10.5 Driven linear evolution

One further standard result is useful when a linearized generator receives an
external input. Around a declared reference state or trajectory, suppose

$$
\dot\xi(t)=A\xi(t)+Bu(t),
$$

where \(\xi(t)\) is a small state deviation, \(A\) is the local linearized
generator, \(u(t)\) is an external input, and \(B\) maps that input into state
coordinates. Then

$$
\boxed{
\xi(t)=e^{tA}\xi(0)+\int_0^t e^{(t-s)A}Bu(s)\,ds.
}
$$

**Proof.** Multiply by \(e^{-tA}\) and differentiate:

$$
\frac{d}{dt}\bigl(e^{-tA}\xi(t)\bigr)=e^{-tA}Bu(t).
$$

Integrate from \(0\) to \(t\), then multiply by \(e^{tA}\). This produces the
boxed variation-of-constants formula. \(\square\)

The first term carries the initial deviation forward. The integral adds the
effect of every external input at the time it occurred, transported to the
present by \(e^{(t-s)A}\). For EBU this is a useful response calculation: it
shows how a declared disturbance or intervention changes the represented state
over time in a linearized domain. It is included as a reconstruction tool, not
as a separate physical research programme.

---

## 11. Long actions as hybrid trajectories

### What this gives EBU

This section resolves the old ambiguity surrounding actions that take time.
A twelve-month project is not forced into a choice between “one transaction”
and “millions of unrelated transactions.” It is one declared finite action
whose internal evolution can be refined into an ordered trajectory. Continuous
changes are integrated; discrete commitments, activations, deliveries, or
failures appear as jumps.

That distinction is valuable for quoting and auditing. EBU can record an
obligation when it is created, follow physical execution as it unfolds, update
marginal burden as the state changes, and measure the final result without
counting these events as though they were the same thing.

### 11.1 Continuous part

Let \(z:[0,S]\to\mathcal Z\) be absolutely continuous and satisfy

$$
\dot z(s)=G(z(s),s)
$$

almost everywhere. If the chain rule applies to \(V\), then

$$
\frac{d}{ds}V(z(s))
=DV(z(s))[G(z(s),s)]
$$

almost everywhere. Integrating,

$$
\boxed{
V(z(S))-V(z(0))
=\int_0^S DV(z(s))[G(z(s),s)]\,ds.
}
$$

### 11.2 Add discrete jumps

Suppose jumps occur at \(s_1,\ldots,s_r\), with left and right states
\(z_j^-\) and \(z_j^+\). Apply the continuous identity on every open interval
between jumps and add the jump differences. Intermediate endpoint terms
cancel, giving

$$
\boxed{
V(z(S))-V(z(0))
=\int_{\text{flow intervals}}DV(z(s))[G(z(s),s)]\,ds
+\sum_{j=1}^r\left[V(z_j^+)-V(z_j^-)\right].
}
$$

If a separate process account is used, it must be added once and must not
duplicate any state-carried term.

### 11.3 Why the starting marginal is insufficient

The starting value

$$
DV(z(0))[G(z(0),0)]
$$

is one instantaneous rate. It cannot generally replace the integral because:

- \(z(s)\) changes;
- the generator may depend on state or time;
- active constraints can change;
- modes can switch;
- commitments can be created;
- burden curvature changes the marginal.

### 11.4 Commitments belong in state

A twelve-month project may create reservations and liabilities at approval,
even though physical work occurs gradually. A minimal schematic augmented state
is

$$
z=(x,\;r,\;c,\;p,\;y,\;\tau),
$$

where \(x\) is physical stock, \(r\) reserves, \(c\) commitments, \(p\) pending
effects, \(y\) mode, and \(\tau\) a clock.

If two states share the same \(x\) but have different \(c\) or \(p\), they can
respond differently to tomorrow's request. This is why long-action theory and
state completeness cannot be separated.

#### Example: a year-long restoration project

Approving the project today may reserve equipment and water immediately. Soil
work may then proceed continuously. Seasonal planting may occur as a discrete
event. Rain may change the natural drive. A delayed ecological response may
remain pending after construction ends. The augmented trajectory can represent
all of these facts. A single start-state marginal cannot, because the project
does not spend twelve months in its starting state.

---

## 12. Recursive encapsulation and boundary equivalence

### What this gives EBU

Recursive encapsulation is what makes a large economy computationally and
conceptually manageable. A household, farm, factory, district, or logistics
network may contain a detailed graph of its own. If that internal graph
preserves every externally relevant request-response history, carrier account,
loss, reserve, commitment, delay, and burden result, the outside model may
treat it as one parent component.

This is more than convenient aggregation. It is a testable replacement rule.
It tells EBU when a detailed subsystem and a simpler parent are equivalent for
the declared purpose. It also creates a path toward parallel computation:
independent interiors can evolve locally while their shared constraints are
resolved at the first boundary that contains all of them.

### 12.1 The question

When may a complicated subgraph \(H\) be represented by one parent component
\(P\) without changing what the outside world can observe?

Let

$$
\pi:\mathcal Z_H\to\mathcal Z_P
$$

map internal state to parent boundary state.

### 12.2 Semiconjugacy as a sufficient witness

Suppose detailed and parent generators satisfy

$$
\boxed{
D\pi(z)G_H(z,r)=G_P(\pi(z),r)
}
$$

for related states and admissible request \(r\). Let \(z_H(s)\) solve the
detailed dynamics. Differentiate the projected state:

$$
\begin{aligned}
\frac{d}{ds}\pi(z_H(s))
&=D\pi(z_H(s))\dot z_H(s)\\
&=D\pi(z_H(s))G_H(z_H(s),r(s))\\
&=G_P(\pi(z_H(s)),r(s)).
\end{aligned}
$$

Therefore \(\pi(z_H(s))\) follows the parent dynamics with the same boundary
input. Under uniqueness and matching initial state,

$$
\boxed{
\pi(T_H^s(z))=T_P^s(\pi(z)).
}
$$

This proves dynamic boundary equivalence under the stated assumptions.

### 12.3 Burden-rate preservation

Suppose detailed burden factors through the parent:

$$
V_H(z)=V_P(\pi(z)).
$$

Then by the chain rule,

$$
DV_H(z)=DV_P(\pi(z))D\pi(z).
$$

Along detailed evolution,

$$
\begin{aligned}
DV_H(z)[G_H(z)]
&=DV_P(\pi(z))[D\pi(z)G_H(z)]\\
&=DV_P(\pi(z))[G_P(\pi(z))].
\end{aligned}
$$

Thus the local burden rate is preserved. If the complete finite histories,
jumps, losses, and process accounts also match, finite burden is preserved.

### 12.4 Why snapshot equality fails

Suppose

$$
\pi(z_A)=\pi(z_B)
$$

today, but \(z_A\) contains an in-transit shipment and \(z_B\) does not. The
same request tomorrow can produce different outputs. Therefore

$$
\pi(z_A)=\pi(z_B)
\not\Longrightarrow
\text{future equivalence}.
$$

The boundary must contain sufficient memory, or equivalence must be defined
over future request-response histories.

~~~mermaid
flowchart LR
    subgraph H["Detailed subsystem H"]
        A["stock"]
        B["queue"]
        C["commitment"]
        D["in-transit payload"]
    end
    H --> PI["boundary map pi"]
    PI --> P["Parent component P"]
    R["admissible request history"] --> H
    R --> P
    H --> O1["detailed boundary outputs"]
    P --> O2["parent boundary outputs"]
    O1 -. "must agree for all admitted histories" .- O2
~~~

### 12.5 Separate obligations

To make the replacement complete, EBU checks several obligations separately:

- conservation closure;
- loss-account closure;
- burden factorization;
- cancellation of internal transfers;
- settlement-record equivalence; or
- causal equivalence.

These are separate predicates because a parent might reproduce physical flow
while omitting a liability, a hidden loss, or a settlement-visible commitment.

The list strengthens encapsulation rather than weakening it. It converts the
vague statement “this subsystem behaves roughly like one component” into a
collection of concrete equivalence tests.

#### Example: a warehouse as one parent component

An external buyer may need to know only the warehouse's accepted input,
available output, delay, loss, and commitments. The parent need not expose the
path of every forklift. But if one internal state contains a shipment due
tomorrow and another does not, both cannot expose the same boundary state if
that shipment changes future service. The boundary must remember the relevant
commitment. Once it does, the detailed warehouse can be replaced without
discarding information that matters outside.

---

## 13. Finite parallel interaction and Möbius inversion

### What this gives EBU

This result gives EBU an exact language for cooperation, competition, and
shared effects among finite actions. Suppose two actions produce 3 and 5 EBU
separately but 10 EBU together. The extra 2 is not hidden inside either action;
it is their pair interaction under the frozen comparison protocol. With three
or more actions, the same algebra can isolate effects that belong only to the
complete group.

This is crucial because large economies are full of combinations whose result
is not the sum of isolated parts. A machine without electricity, transport
without a product, or a treatment plant without an incoming carrier may have
little effect alone. The Möbius decomposition identifies exactly which level
of combination contributes the difference, while preserving the complete
finite total.

### 13.1 Frozen subset protocol

Let \(N\) be a finite set of registered actions. For every required subset
\(S\subseteq N\), define \(E(S)\) under the same:

- initial augmented state;
- boundary and field versions;
- units and horizon;
- exogenous history;
- meaning of removing an action;
- quantity-fixed or rule-replayed semantics;
- shared-constraint resolver;
- active modes, losses, commitments, and process accounts.

Without a frozen protocol, differences among subsets may measure a changed
experiment rather than interaction.

### 13.2 Interaction coefficients

Define

$$
\boxed{
I_S=\sum_{R\subseteq S}(-1)^{|S|-|R|}E(R).
}
$$

In particular,

$$
I_\varnothing=E(\varnothing).
$$

For one action,

$$
I_{\{1\}}=E(\{1\})-E(\varnothing).
$$

For two actions,

$$
\boxed{
I_{\{1,2\}}
=E(\{1,2\})-E(\{1\})-E(\{2\})+E(\varnothing).
}
$$

### 13.3 Proof of exact inversion

We prove

$$
\boxed{
E(S)=\sum_{R\subseteq S}I_R.
}
$$

Substitute the definition of \(I_R\):

$$
\begin{aligned}
\sum_{R\subseteq S}I_R
&=\sum_{R\subseteq S}
\sum_{Q\subseteq R}
(-1)^{|R|-|Q|}E(Q)\\
&=\sum_{Q\subseteq S}E(Q)
\sum_{R:\,Q\subseteq R\subseteq S}
(-1)^{|R|-|Q|}.
\end{aligned}
$$

Fix \(Q\). Every \(R\) between \(Q\) and \(S\) is obtained by adding a subset
of \(S\setminus Q\). Therefore the inner sum is

$$
\sum_{k=0}^{|S|-|Q|}
\binom{|S|-|Q|}{k}(-1)^k
=(1-1)^{|S|-|Q|}.
$$

This equals zero unless \(Q=S\), in which case it equals one. All terms cancel
except \(E(S)\). Hence

$$
\sum_{R\subseteq S}I_R=E(S).
$$

This is an exact algebraic proof.

The practical meaning of the inversion is important: no outcome is lost. The
complete group result can be rebuilt exactly from the baseline, individual
effects, pair effects, triple effects, and every required higher-order term.
The decomposition therefore acts like a lossless change of coordinates on the
subset-outcome table.

### 13.4 Nonzero empty baseline

If waiting, natural drift, standing commitments, or fixed system costs occur,
then \(E(\varnothing)\) need not be zero.

For example, let

$$
E(\varnothing)=2,\quad
E(\{1\})=5,\quad
E(\{2\})=7,\quad
E(\{1,2\})=12.
$$

Then

$$
\begin{aligned}
I_\varnothing&=2,\\
I_1&=5-2=3,\\
I_2&=7-2=5,\\
I_{12}&=12-5-7+2=2.
\end{aligned}
$$

Reconstruction gives

$$
2+3+5+2=12.
$$

Dropping the empty baseline would break the identity.

### 13.5 Exact truncation residual

Suppose a model retains interactions only through order \(k\). Define

$$
R_{>k}(S)
=E(S)-E(\varnothing)
-\sum_{\substack{\varnothing\ne R\subseteq S\\|R|\le k}}I_R.
$$

Using exact reconstruction,

$$
E(S)-E(\varnothing)
=\sum_{\varnothing\ne R\subseteq S}I_R.
$$

Subtract the terms with \(|R|\le k\). The remaining terms are

$$
\boxed{
R_{>k}(S)
=\sum_{\substack{R\subseteq S\\|R|>k}}I_R.
}
$$

This is algebraic closure. It is not physical conservation.

### 13.6 Inadmissible subsets

The alternating-sign formula assumes the complete Boolean subset lattice. If a
required subset is physically meaningless or infeasible, the coefficient is
undefined under this protocol. One may later define a feasible-set poset and
its own Möbius function, but the Boolean formula cannot be reused without
proof.

---

## 14. Why interaction topology may be a hypergraph

### What this gives EBU

The hypergraph result expands what EBU can discover about economic structure.
An ordinary graph records relations between pairs. The proof below exhibits a
system in which every pair contributes exactly zero interaction while the
three actions together contribute five units. A pair graph cannot encode that
fact; a three-member hyperedge can.

This matters for typology and topology research. EBU can distinguish a chain of
pair dependencies from a genuinely joint requirement. A factory, transport
route, and clearance service may form one functional unit even though no pair
can complete the outcome. The interaction topology can therefore reveal
operational organization that is invisible in the physical transport graph.

### 14.1 Pure three-way interaction

Consider

$$
\begin{array}{c|cccccccc}
S
&\varnothing&1&2&3&12&13&23&123\\
\hline
E(S)
&0&2&3&4&5&6&7&14
\end{array}
$$

The pair interactions are

$$
\begin{aligned}
I_{12}&=5-2-3+0=0,\\
I_{13}&=6-2-4+0=0,\\
I_{23}&=7-3-4+0=0.
\end{aligned}
$$

For the triple,

$$
\begin{aligned}
I_{123}
&=E(123)-E(12)-E(13)-E(23)\\
&\quad+E(1)+E(2)+E(3)-E(\varnothing)\\
&=14-5-6-7+2+3+4-0\\
&=\boxed{5}.
\end{aligned}
$$

Every pair coefficient is zero, but the three-way coefficient is nonzero.

### 14.2 Economic interpretation

Let:

- action \(A\) provide production capacity;
- action \(B\) provide transport capacity;
- action \(C\) provide settlement clearance.

No pair completes the transaction because one required condition is absent.
All three together unlock the result.

An ordinary graph contains only pair edges. It would display three isolated
vertices and lose the interaction. A hypergraph can represent one hyperedge
\(\{A,B,C\}\).

~~~mermaid
flowchart TD
    A["A: production"]
    B["B: transport"]
    C["C: settlement"]
    H(("I_ABC = 5"))
    A --- H
    B --- H
    C --- H
~~~

### 14.3 Four different topologies

The following must not be conflated:

1. **Structural interaction topology:** interactions that could become active.
2. **Active interaction topology:** coefficients or constraints active now.
3. **Physical transport topology:** where carriers can move.
4. **Institutional constraint topology:** shared authority, capacity, budgets,
   commitments, or governance.

Two actions can interact through a shared capacity without physical adjacency.
Two physically adjacent nodes can have zero EBU interaction under a particular
state and horizon.

### 14.4 What the hyperedge establishes

A nonzero hyperedge establishes that the tested group has an outcome component
that cannot be reconstructed from its lower-order subsets under the frozen
protocol. That is already a strong and useful result. The following later
questions remain deliberately separate:

- which action caused the outcome;
- who is entitled to payment;
- where settlement must occur;
- that a disturbance physically propagated; or
- any mechanism beyond the measured parallel-action interaction.

---

## 15. Local coupling and order effects

Finite subset interactions answer a global question: what changes when a
whole collection of actions is admitted? Two local tools answer related but
different questions. A mixed difference measures local curvature of an
outcome surface. A commutator measures whether changing the order of two
infinitesimal transformations changes the state.

### What this gives EBU

Möbius coefficients describe complete finite groups. Mixed differences and
commutators let EBU inspect interaction locally.

- A mixed difference detects whether increasing one action changes the
  marginal result of another. This is the local signature of a shared pipe,
  shared reserve, shared budget, or another coupled constraint.
- A commutator detects whether “A then B” starts producing a different state
  from “B then A.” This is the local signature of sequence dependence.

These are two distinct discoveries. Amount interaction says that quantities
influence each other's result. Order interaction says that the sequence of
transformations matters. Recording them separately makes the future typology
far richer and more precise than a single generic label.

### 15.1 Mixed differences

Let \(E(q)\) be a twice continuously differentiable scalar outcome, where
\(q=(q_1,\ldots,q_n)\) contains action quantities. Choose two actions \(i\)
and \(j\), with positive increments \(\delta_i\) and \(\delta_j\). Define

$$
\begin{aligned}
\Delta_i\Delta_j E(q)
={}&E(q+\delta_i e_i+\delta_j e_j)
-E(q+\delta_i e_i)\\
&-E(q+\delta_j e_j)+E(q).
\end{aligned}
$$

Here \(e_i\) is the unit vector in the \(q_i\) direction. The four terms form
the corners of a small rectangle. If the two actions are locally additive,
the expression is zero. A nonzero value means that the local effect of one
increment depends on whether the other increment is also present.

**Conditional theorem (mixed-difference identity).** If \(E\) is \(C^2\) on
the entire rectangle, then

$$
\boxed{
\Delta_i\Delta_jE(q)
=
\int_0^{\delta_i}\int_0^{\delta_j}
\frac{\partial^2 E}{\partial q_i\partial q_j}
(q+s e_i+t e_j)\,dt\,ds.
}
$$

**Proof.** Fix \(s\) temporarily. Apply the fundamental theorem of calculus
in the \(q_j\) direction:

$$
\begin{aligned}
&E(q+s e_i+\delta_j e_j)-E(q+s e_i)\\
&\qquad=
\int_0^{\delta_j}
\partial_jE(q+s e_i+t e_j)\,dt.
\end{aligned}
$$

Evaluate this statement at \(s=\delta_i\) and at \(s=0\), and subtract. The
left side becomes the four-corner mixed difference. On the right side,

$$
\partial_jE(q+\delta_i e_i+t e_j)-\partial_jE(q+t e_j)
=
\int_0^{\delta_i}\partial_i\partial_jE(q+s e_i+t e_j)\,ds.
$$

Substitute this into the first integral. Continuity permits the order of
integration to be exchanged, producing the boxed identity. \(\square\)

Dividing by \(\delta_i\delta_j\) and shrinking the rectangle gives

$$
\lim_{\delta_i,\delta_j\to0}
\frac{\Delta_i\Delta_jE(q)}{\delta_i\delta_j}
=\partial_{ij}E(q).
$$

Thus the mixed partial is a *local interaction density*. It is not a finite
interaction coefficient unless it is integrated over a declared path or
region.

### 15.2 Example: two pumps sharing one narrow pipe

Suppose two pumps send quantities \(q_1,q_2\) through one pipe and the burden
of congestion is

$$
C(q_1,q_2)=\frac{(q_1+q_2)^2}{2K}.
$$

Then

$$
\frac{\partial^2 C}{\partial q_1\partial q_2}=\frac1K>0.
$$

One extra unit from pump 1 increases the marginal congestion faced by pump 2.
The interaction is not mysterious: both actions load the same physical
constraint. If the pumps used genuinely separate pipes and the burden
factorized as \(C_1(q_1)+C_2(q_2)\), the mixed partial would be zero.

### 15.3 Noncommuting generators

Let \(G_i\) and \(G_j\) be differentiable state-vector fields. Let \(T_i^h\)
and \(T_j^h\) denote their short-time flows. For small \(h\),

$$
T_i^h(z)=z+hG_i(z)+\frac{h^2}{2}DG_i(z)G_i(z)+O(h^3).
$$

Compose \(j\) first and then \(i\). Taylor-expand \(G_i\) at the intermediate
state \(z+hG_j(z)+O(h^2)\):

$$
\begin{aligned}
T_i^h(T_j^h(z))
={}&z+h(G_i+G_j)\\
&+h^2DG_iG_j
+\frac{h^2}{2}(DG_iG_i+DG_jG_j)+O(h^3).
\end{aligned}
$$

Reversing the order gives

$$
\begin{aligned}
T_j^h(T_i^h(z))
={}&z+h(G_i+G_j)\\
&+h^2DG_jG_i
+\frac{h^2}{2}(DG_iG_i+DG_jG_j)+O(h^3).
\end{aligned}
$$

Subtracting cancels the common first-order and self-evolution terms:

$$
\boxed{
T_i^h\!\circ T_j^h(z)-T_j^h\!\circ T_i^h(z)
=h^2[G_i,G_j](z)+O(h^3),
}
$$

where this manuscript uses

$$
[G_i,G_j]=DG_iG_j-DG_jG_i.
$$

This is the Lie bracket, with the sign determined by the stated composition
convention. If it is nonzero, action order matters locally to second order.

### 15.4 Two complementary interaction laws

- A nonzero mixed difference proves local scalar coupling over the tested
  rectangle.
- A nonzero commutator proves local order sensitivity of state evolution.
- A zero bracket at one state does not prove that the flows commute throughout
  a neighbourhood.
- The two results can coexist: a pair may change each other's marginal outcome,
  exhibit order sensitivity, or do both.

The term *parallel interaction* is therefore broader than simultaneous
execution. It includes shared constraints, scalar nonadditivity, and ordering
effects, each of which needs its own record.

---

## 16. Shared constraints and marginal allocation

### What this gives EBU

This is the operational payoff of divisibility and recursive boundaries. When
several divisible requests share a real constraint, EBU does not need to accept
one entire action and reject all others merely because they arrived together.
The lowest boundary that sees the complete shared constraint can select one
jointly feasible allocation.

The marginal-equalization result then explains the characteristic shape of an
interior optimum. If moving one more small unit to actor A would create more of
the declared collective objective than moving it to actor B, the current
allocation can still be improved. At the optimum, every participant receiving
an interior allocation has the same marginal collective value. This is the
precise mathematical version of reallocating economic atoms until no further
small transfer can improve the declared result.

### 16.1 Why independent child decisions can fail

Imagine two child components, each seeing a local request for 8 units. They
share a parent boundary with capacity 10. If both children independently
approve 8, the combined approval is 16 and violates the real constraint.

~~~mermaid
flowchart TD
    R1["Child A requests 8"] --> P["Lowest complete common boundary"]
    R2["Child B requests 8"] --> P
    P --> C["Shared capacity: q_A + q_B <= 10"]
    C --> J["Joint feasibility and comparison"]
    J --> A["One jointly accepted allocation"]
~~~

The boundary that first contains every shared constraint must resolve the
requests jointly. This is a compositional rule: a child may decide locally
only when the relevant feasible region factorizes.

### 16.2 Feasibility comes before value

Let \(q=(q_1,\ldots,q_n)\) be divisible accepted quantities and let

$$
\mathcal F=\{q:g_k(q)\le0,\ k=1,\ldots,m;\ h_\ell(q)=0\}
$$

be the declared feasible region. A comparison rule is applied only inside
\(\mathcal F\). Divisibility makes continuous allocation possible; it does not
select proportional rationing or any other objective.

For a scalar concave objective \(E(q)\), one possible problem is

$$
\max_{q\in\mathcal F}E(q).
$$

Other studies may require a vector objective, lexicographic priority, an
\(\varepsilon\)-constraint rule, or a Pareto set. The rule and tie-break must
be declared before results are known.

### 16.3 Marginal equalization from the KKT conditions

Consider the simple shared-resource problem

$$
\max_{q_i\ge0}\sum_{i=1}^n U_i(q_i)
\quad\text{subject to}\quad
\sum_{i=1}^n q_i\le Q.
$$

Assume each \(U_i\) is differentiable and concave and that a constraint
qualification holds. Write the Lagrangian

$$
\mathcal L(q,\lambda,\beta)
=
\sum_iU_i(q_i)
+\lambda\left(Q-\sum_iq_i\right)
+\sum_i\beta_iq_i,
$$

with \(\lambda,\beta_i\ge0\). Stationarity gives

$$
U_i'(q_i)-\lambda+\beta_i=0.
$$

For every participant receiving an interior amount \(q_i>0\), complementary
slackness gives \(\beta_i=0\). Hence

$$
\boxed{U_i'(q_i)=\lambda.}
$$

In ordinary language: keep reallocating infinitesimal participation until the
next small unit assigned to every interior participant has the same marginal
collective value. If one participant had a larger marginal value, moving a
small amount toward it would improve the declared objective, contradicting
optimality.

The multiplier \(\lambda\) is the *shadow value* of relaxing the shared
capacity by one unit under the same local model. It is not automatically a
price, a causal contribution, or an entitlement.

### 16.4 Complete numerical example

Determine the accepted quantities for

$$
\max_{q_1,q_2\ge0}
\left(10q_1-\frac{q_1^2}{2}\right)
+\left(8q_2-\frac{q_2^2}{4}\right)
$$

subject to \(q_1+q_2\le10\). The two marginal values are

$$
U_1'(q_1)=10-q_1,
\qquad
U_2'(q_2)=8-\frac{q_2}{2}.
$$

At an interior solution with a binding capacity constraint,

$$
10-q_1=8-\frac{q_2}{2}=\lambda,
\qquad
q_1+q_2=10.
$$

From the first equality \(q_1=2+q_2/2\). Substitution gives

$$
2+\frac{q_2}{2}+q_2=10,
$$

so

$$
\boxed{q_1=\frac{14}{3},\qquad q_2=\frac{16}{3},\qquad
\lambda=\frac{16}{3}.}
$$

The total objective is

$$
\boxed{E(q^*)=\frac{214}{3}.}
$$

The Hessian is diagonal with entries \(-1\) and \(-1/2\), so the objective is
strictly concave. The feasible region is convex. Therefore this KKT point is
the unique global maximum. Strict concavity is a powerful sufficient
condition for uniqueness, not a logically necessary one; some non-strict
problems also happen to have a unique solution.

### 16.5 What has been solved at this stage

The calculation solves the physical-mathematical allocation problem that was
actually posed: it finds the unique divisible quantities that maximize the
declared objective without violating the shared capacity. This gives EBU a
reproducible alternative to independent over-approval or an unexplained
proportional split.

The objective, input-verification rule, and later settlement policy are
declared separately. That separation lets the same allocation mathematics be
audited without disguising a policy choice as a physical law.

---

## 17. Aumann-Shapley closure and its boundary

### What this gives EBU

Once EBU has measured one group total, a later process may need an exact
mathematical decomposition of that scalar. The Aumann-Shapley construction
provides one principled method for divisible participation. It accumulates each
participant's marginal contribution while the whole group grows
proportionally from zero to its final quantities.

Its key achievement is closure: the shares add exactly to the selected group
total, or to the total above an explicitly retained baseline. This prevents
silent creation or loss of EBU during mathematical decomposition.

Suppose a differentiable scalar group total \(C(q)\) has already been selected
and \(C(0)=0\). The Aumann-Shapley share along the radial path \(tq\) is

$$
S_i(q)=\int_0^1 q_i\,\partial_iC(tq)\,dt.
$$

### 17.1 Closure proof

Sum the shares:

$$
\begin{aligned}
\sum_iS_i(q)
&=\int_0^1\sum_iq_i\partial_iC(tq)\,dt\\
&=\int_0^1\nabla C(tq)\cdot q\,dt.
\end{aligned}
$$

By the chain rule,

$$
\frac{d}{dt}C(tq)=\nabla C(tq)\cdot q.
$$

Therefore the fundamental theorem of calculus gives

$$
\boxed{
\sum_iS_i(q)=C(q)-C(0)=C(q).
}
$$

This is exact budget closure for the stated scalar and path. If \(C(0)\ne0\),
the formula allocates only \(C(q)-C(0)\); the baseline must be handled
explicitly.

### 17.2 What the radial path means

The radial path represents all quantities growing proportionally from zero.
Another admissible path can produce different shares when marginal effects
depend on the path. The method is therefore a declared decomposition
convention, not a universal causal theorem.

That is useful rather than defective: the path is visible and auditable.
Another institution can choose another declared path or decomposition without
altering the already measured physical group result.

### 17.3 Four ledgers that must remain separate

~~~mermaid
flowchart TD
    P["Physical group result: measured once"] --> D["Mathematical decomposition"]
    P --> C["Causal assessment: identified or unidentified"]
    D --> S["Institutional settlement rule"]
    C --> S
    S --> R["Shares plus explicit residual close the group total"]
~~~

For example, suppose the measured group total is 12 EBU. An institution may
settle 5 to actor A, 6 to actor B, and retain an explicit residual of 1 while
causal attribution remains **unidentified**. This can be auditable without
pretending that 5 and 6 are physical causal measurements.

The distinction is essential:

- **physical total** asks what finite transition occurred;
- **decomposition** asks how a declared scalar can be written as shares;
- **causal attribution** asks what would have happened under interventions;
- **settlement** asks which authorized accounts receive or pay values.

---

## 18. Interaction preservation under encapsulation

### What this gives EBU

This theorem joins the recursion result to the interaction result. It shows
exactly when a detailed subgraph can be replaced by a parent without changing
the pair, triple, or higher-order effects visible from outside. If every exposed
subset produces the same finite outcome before and after encapsulation, every
exposed interaction coefficient is automatically preserved—and conversely.

This gives EBU a strong multiscale guarantee. Internal complexity may be hidden,
but externally testable cooperation and conflict cannot be invented or erased.

Let \(H\) be a detailed subgraph and \(P\) a proposed parent component. Let
\(E_H(R)\) and \(E_P(R)\) be their outcomes under the same frozen protocol for
every exposed action subset \(R\subseteq N\), including
\(R=\varnothing\).

### 18.1 Forward theorem

If

$$
E_H(R)=E_P(R)\qquad\text{for every }R\subseteq N,
$$

then every finite interaction coefficient is preserved:

$$
\boxed{I_T^H=I_T^P\qquad\text{for every }T\subseteq N.}
$$

**Proof.** Apply the same Möbius transform to both outcome tables:

$$
I_T^H-I_T^P
=
\sum_{R\subseteq T}(-1)^{|T|-|R|}
\bigl(E_H(R)-E_P(R)\bigr)=0.
\qquad\square
$$

### 18.2 Converse theorem

If every coefficient agrees, the reconstruction identity gives

$$
E_H(R)=\sum_{T\subseteq R}I_T^H
=\sum_{T\subseteq R}I_T^P=E_P(R).
$$

Thus, for the frozen exposed action family, the complete subset-outcome table
and the complete interaction table contain equivalent information.

### 18.3 What topology is preserved

The parent must preserve the externally visible or quotient interaction
topology. It may hide or collapse internal topology. Requiring an encapsulated
parent to expose every internal edge would defeat encapsulation; permitting it
to alter externally testable subset outcomes would make it scientifically
false.

---

## 19. Structural additivity under strong separation assumptions

### What this gives EBU

This theorem provides a safe criterion for genuine parallel independence. If
two action blocks have separate state factors, commuting evolution, disjoint
carrier and loss accounts, an additive burden field, and no hidden shared
constraint or memory, then every interaction spanning the two blocks is zero.

That result can justify decomposing a large problem into smaller problems,
solving or simulating them in parallel, and recombining their results. It also
provides a diagnostic: when measured cross-block interaction is nonzero, at
least one claimed separation condition is incomplete or the evaluation
protocol has changed.

When may two groups really be treated as independent? The useful theorem is
conditional, because mere visual separation in a graph is insufficient.

Partition the action set into disjoint blocks \(N_1\) and \(N_2\). Assume:

1. the complete state is a product \(z=(z^{(1)},z^{(2)})\);
2. each block changes only its own state factor;
3. the two flows commute for all admitted histories;
4. their typed carrier and loss ledgers are disjoint;
5. the burden factorizes as \(V(z)=V_1(z^{(1)})+V_2(z^{(2)})\); and
6. no hidden commitment, queue, constraint, controller memory, or boundary
   observation couples the blocks.

Under these assumptions the normalized subset outcome has the form

$$
v(S)=v_1(S\cap N_1)+v_2(S\cap N_2),
$$

where \(v(\varnothing)=0\). Consider an interaction set \(T\) containing at
least one action from each block. Write \(T_1=T\cap N_1\) and
\(T_2=T\cap N_2\), both nonempty. Its Möbius coefficient is

$$
I_T=\sum_{R_1\subseteq T_1}\sum_{R_2\subseteq T_2}
(-1)^{|T_1|-|R_1|+|T_2|-|R_2|}
\bigl(v_1(R_1)+v_2(R_2)\bigr).
$$

For the \(v_1\) part, factor the sum over \(R_2\):

$$
\sum_{R_2\subseteq T_2}(-1)^{|T_2|-|R_2|}
=(1-1)^{|T_2|}=0.
$$

The \(v_2\) part vanishes by the corresponding sum over nonempty \(T_1\).
Therefore

$$
\boxed{I_T=0\quad\text{for every interaction spanning both blocks}.}
$$

This theorem explains exactly what must be demonstrated before parallel work
can be split safely. It also supplies falsifiers: any shared capacity, delayed
effect, factor in \(V\), loss account, or hidden state may break additivity.

#### Example: two truly separate local systems

Suppose two farms use different water reservoirs, different equipment, and
different delivery routes; neither contract, queue, burden term, nor loss
account depends on the other. Their state and burden factorize, so evaluating
both together adds the two results and produces no cross-farm interaction.
They may be simulated independently.

If they later draw from one regional reserve, the shared-capacity condition
breaks the factorization. The parent boundary must then resolve their requests
jointly. The theorem therefore tells EBU both when parallelization is safe and
exactly when to stop treating the components as independent.

---

## 20. What the new laws resolve

The prospective package gives the EBU project a coherent mathematical core for
continuous transactions, multiscale components, and parallel interaction. Its
importance can be summarized as six new capabilities:

1. **Local-to-finite continuity.** EBU can begin with marginal burden and flow,
   retain a transaction-specific local generator at the atomic limit, and
   reconstruct a complete finite action.
2. **Loss-consistent scale change.** Infinitesimal efficiency can approach one
   while a nonzero loss density composes into the correct finite efficiency.
3. **Long-action representation.** Continuous execution, discrete activation,
   commitments, delays, and final measurement can belong to one ordered hybrid
   trajectory.
4. **Recursive economic structure.** A graph may be encapsulated as one parent
   when its complete boundary histories and accounts are preserved.
5. **Exact parallel-interaction structure.** Finite group results separate
   exactly into baseline, individual, pair, triple, and higher-order terms.
6. **Joint constrained coordination.** Divisible requests sharing a constraint
   can be resolved together, with marginal equalization when the declared
   optimization assumptions apply.

These are substantial structural results. They replace several overbroad
assumptions with explicit laws, proofs, and test conditions. The detailed table
shows the ambiguity removed by each decision.

| Item | Prospective result | Earlier ambiguity removed |
|---|---|---|
| F1 | The economic atom is differential participation carrying a local generator, not a smallest positive object. | Searching for a universal finite “smallest transaction.” |
| F2 | Divisibility is declared separately for quantity, process extent, institutional acceptance, and identity. | The false claim that every meaning of an action is universally divisible. |
| F3 | Every generator declares its coordinate, unit, orientation, and domain. | Writing a derivative without saying what tends to zero. |
| F4 | Reparameterization transforms the generator and integration measure together. | Treating numerical generator values as coordinate-independent. |
| F5 | Quantity participation and complete state transformation have distinct generators joined by a constitutive map. | Confusing carrier amount with the whole economic-state change. |
| F6 | Unit efficiency in the atomic limit requires relative loss to vanish under a declared denominator. | Inferring \(\eta\to1\) merely from absolute loss \(L\to0\). |
| F7 | Fixed activation and minimum bundles are discrete jumps; within-mode evolution may remain divisible. | Evading or duplicating fixed costs by subdivision. |
| F8 | Commitments, reserves, queues, delays, modes, and memory enter state whenever they affect the future. | Treating long actions as physically cheap before their future obligations materialize. |
| F9 | Request, permission, reservation, quote, acceptance, execution, measurement, receipt, causal assessment, and settlement remain distinct events. | Treating approval, physical execution, and payment as one operation. |
| F10 | Exact encapsulation is history-wide behavioural and accounting equivalence, not snapshot equality. | Replacing a subgraph by a parent that forgets pending effects. |
| F11 | Joint allocation is feasibility first, followed by a predeclared scalar, Pareto, lexicographic, or epsilon-constraint comparison and tie rule. | Claiming that divisibility itself implies proportional allocation. |
| F12 | Marginal allocation and scalar decomposition stop before causal attribution and institutional settlement. | Treating a mathematical share as cause or entitlement. |
| F13 | Frozen subset outcomes have an exact Möbius interaction decomposition including \(E(\varnothing)\). | Losing natural drift, waiting burden, or fixed baseline cost. |
| F14 | Mixed differences measure local scalar coupling; commutators measure local order effects. | Treating all forms of interaction as one undefined phenomenon. |
| F15 | Shared constraints belong at the lowest complete common boundary; prospective interaction topology is a typed, state-dependent hypergraph with factor nodes. | Independent approvals that jointly violate a shared resource limit, and pair graphs that omit pure higher-order effects. |
| F16 | Exact exposed subset equivalence preserves exposed interaction coefficients and quotient topology. | Assuming recursion preserves interactions without a proof condition. |

### 20.1 One concrete picture for every foundation result

**F1 — The economic atom.** Imagine filming a delivery process at ever higher
frame rates. Each frame contains almost no delivered quantity, but the rate at
which stocks, losses, and commitments change remains. That surviving law is
the generator. EBU can therefore divide continuous participation without
making every transaction indistinguishable.

**F2 — Declared kinds of divisibility.** Ten kilograms may be divided into
smaller quantities even when a safety approval must remain one indivisible
decision. EBU can use continuous allocation without pretending that identities,
contracts, and mode activations are also fractions of themselves.

**F3 — A coordinate and unit for every generator.** “Changes by 2” is
meaningless until the model says whether that means 2 units per second, per
kilometre, or per kilogram processed. Declared coordinates let generators from
different components be interpreted and combined correctly.

**F4 — Reparameterization.** Describing the same process in seconds instead of
minutes changes the numerical rate but not the finite result. This lets EBU
change resolution or units without changing the represented transaction.

**F5 — Quantity and state generators.** Sending one kilogram along an edge is a
quantity statement. The resulting change in source stock, destination stock,
loss, reserve, queue, and commitment is a state-transformation statement. Their
explicit link prevents a carrier number from being mistaken for the whole
economic effect.

**F6 — Relative loss and atomic efficiency.** A tiny process can lose an
absolutely tiny amount and still be only 80 percent efficient if its input is
equally tiny. The declared denominator prevents this error and explains exactly
when efficiency approaches one.

**F7 — Hybrid activation.** Starting a furnace once and then operating it for
an hour contains one startup event plus continuous running. The hybrid law
prevents subdivision from charging the startup thousands of times or avoiding
it completely.

**F8 — Commitment-aware state.** Two projects may have performed the same
physical work today, yet one has promised tomorrow's water and the other has
not. Recording the commitment lets EBU distinguish their future capacity.

**F9 — Transaction lifecycle.** Permission is not execution, a quote is not a
receipt, and a receipt is not settlement. Keeping the stages distinct makes a
long transaction traceable and prevents an expected result from being recorded
as though it had already occurred.

**F10 — History-wide encapsulation.** Two warehouses with the same current
stock are not equivalent if one has a shipment already in transit. A valid
parent component must reproduce the future boundary behaviour that the outside
world can test, not merely today's snapshot.

**F11 — Feasibility before comparison.** If two children request sixteen units
from a ten-unit reserve, EBU first restricts the decision to allocations that
use at most ten. Only then does the declared objective or priority rule compare
the feasible alternatives.

**F12 — Allocation, cause, and settlement.** A mathematical optimizer can say
which quantities maximize a declared result. That answer does not have to be
mislabelled as a measurement of who physically caused the result or as a rule
for who gets paid. The three records can remain exact and auditable.

**F13 — Exact finite interaction.** If a pump contributes 3, a treatment unit
contributes 5, and together they contribute 10, the pair interaction is 2. The
Möbius law extends that accounting exactly to every higher-order group and
retains the no-action baseline.

**F14 — Amount and order interaction.** Two processes can interact because
their quantities share a bottleneck, because performing A before B differs
from B before A, or both. Mixed differences and commutators let EBU tell these
patterns apart.

**F15 — Shared boundaries and hypergraph factors.** Production, transport, and
clearance may create a result only when all three are present. The common
boundary resolves their shared constraint; the hyperedge records their genuine
three-way interaction.

**F16 — Interaction-preserving recursion.** A detailed regional network may be
collapsed into one parent for a national model. If every exposed subset outcome
is preserved, every exposed pair and higher-order interaction is preserved as
well. Scale reduction no longer has to erase the structure EBU is trying to
study.

Several earlier “open problems” therefore change status:

- “Is a long action one event or many?” is replaced by a hybrid trajectory
  with continuous segments and declared jumps.
- “What is the economic atom?” receives a precise differential answer.
- “Does divisibility imply proportional allocation?” is answered **no**;
  proportional rationing becomes only one declared baseline.
- “Can a pair graph express every parallel interaction?” is answered **no**;
  pure higher-order coefficients require hyperedges or equivalent factor
  structure.
- “When is structural additivity safe?” has a conditional theorem with
  explicit product, commutation, ledger, burden, and hidden-state assumptions.
- “Does encapsulation preserve interaction?” has an exact finite proof when
  the complete exposed subset table is preserved.

This is a substantial reduction in conceptual uncertainty even though a
carefully organized register may contain more rows. Splitting one vague issue
into a resolved theorem and two precise empirical questions makes the list
longer on paper but the science stronger.

---

## 21. What the new structure makes possible next

The results above do not leave EBU “empty until everything else is proved.”
They provide a stable platform on which the remaining work can be separated
cleanly. Some next steps turn the mathematics into machine-enforced framework
records. Others test a particular physical domain. Still others study long-run
or uncertain behaviour.

The distinction matters because each completed law has already reduced the
space of uncertainty. Future route research no longer has to invent what a
local transaction is; it can declare a generator and test its finite
reconstruction. Future topology research no longer has to use vague language
about synergy; it can measure pair and higher-order coefficients under a frozen
protocol. Future parallel execution no longer has to guess whether two
subproblems are independent; it can test the separation assumptions in
Section 19.

### 21.1 Capability roadmap

| Stage | Capability already supplied by the new laws | Work needed to use it at that stage |
|---|---|---|
| **Authority** | Precise definitions for extent, generator, loss scaling, hybrid action, boundary equivalence, interaction, and allocation. | Complete the prospective authority audit and freeze the accepted wording and validation vectors. |
| **Framework declarations** | A closed conceptual grammar for atomic and interaction records. | Implement inert typed schemas, fixtures, and validators so the framework can reject incomplete declarations. |
| **Framework alpha operations** | A lifecycle that separates request, execution, receipt, causal status, and settlement. | Complete the applicable durable-commitment, publication, recovery, and reconstructable-trace mechanisms. |
| **One physical domain** | A recipe for declaring state, generator, carrier flow, loss, and boundary histories. | Identify the domain variables and show that the chosen dynamics have a well-defined trajectory under their stated stopping and jump rules. |
| **Coupled safety** | A local burden-descent identity and explicit conservation/loss accounts. | Extend the proof to the specific constrained and hybrid updates used by the domain, including active-set and jump cases. |
| **Long-run behaviour** | A local generator and finite reconstruction on which temporal analysis can operate. | Establish the relevant viability, invariance, stability, recovery, and cumulative-burden results. |
| **Uncertainty** | Clear separation between state, objective, constraint, and measured receipt. | Freeze an uncertainty or probability model, calibrate it, and test robust P1C and reserve rules. |
| **Cross-scale routes** | History-wide boundary equivalence and interaction preservation. | Define concrete queue, delay, route, topology-change, and asynchronous roll-up semantics and prove account closure. |
| **Large interaction systems** | Exact Möbius reconstruction and an exact omitted-order residual. | Design prospective sparse or sampling protocols with error bounds for cases where evaluating every subset is too expensive. |

### 21.2 Measurements the new structure now makes possible

The new laws turn broad ideas into measurable questions. A generator can be
tested against held-out transitions. A boundary can be challenged with future
request histories. A proposed hyperedge can be reproduced under a frozen
subset protocol. This is scientific progress: the model now says what evidence
would support or reject a domain-specific claim.

| New empirical capability | Evidence to collect |
|---|---|
| Generator identification | Whether an estimated \(G(z,s)\) predicts held-out finite transitions with declared error. |
| Carrier loss and conversion | Which outputs are useful carrier, which are loss coordinates, and whether conservation closes within uncertainty. |
| Persistent restoration | Whether a claimed restoration persists, regenerates, and changes future feasible capacity. |
| Reserve sizing | Which margin attains a declared risk or no-harm target under real uncertainty. |
| Boundary completeness | Whether two states judged boundary-equivalent remain indistinguishable under adversarial future request histories. |
| Causal attribution | Whether interventions or a justified causal model identify which action caused which portion of a joint result. |
| Active topology | Which pair, higher-order, and factor interactions are reproducible rather than noise or protocol artefacts. |

### 21.3 Institutional choices kept explicit

The mathematical structure also shows where physical measurement ends and a
social decision begins. That protects the EBU result from being silently
rewritten by a payment or governance rule. Institutions can use scientific
evidence while openly deciding:

- who receives or pays settlement shares;
- who owns an explicit residual;
- how priority, liability, compensation, and disputes are handled;
- how privacy and independent recomputation are balanced;
- how public restoration is funded and benefits are shared; and
- whether or how money accounts exchange with EBU records.

These choices do not block the study of physical transitions. They become
necessary only when an institution performs the corresponding settlement,
priority, liability, or governance operation.

### 21.4 Why the roadmap strengthens scientific review

The presence of later work does not reduce the results in Sections 3–19. It
shows that the project now has layers. A reviewer can inspect an
algebraic identity as an identity, a conditional theorem under its stated
assumptions, a framework declaration as a machine contract, and an empirical
claim against measured evidence. A defensible programme can therefore proceed
in a controlled order:

1. independently validate the prospective mathematical authority;
2. let the framework represent unresolved hypotheses inertly and fail closed;
3. implement the operational durability required for alpha;
4. preregister each domain experiment with its applicable assumptions and
   falsifiers; and
5. make only the claims that survive those protocols.

The important achievement is that the framework can now represent these
questions precisely. Evidence from a particular domain then answers them one
by one. EBU does not need every future experiment to be completed before its
mathematical architecture has value; it needs each claim to remain attached to
the correct layer of proof or evidence.

---

## 22. Proof dependency index

This index is a map of the mathematical foundation. It shows which results are
proved directly in this guide, which standard theorems reconstruct finite
behaviour, and which conditions an EBU domain must declare to use them. The
conditions are not apologies attached to the mathematics. They are what make
the results portable and auditable: a reader can see exactly when the same law
may be carried from one domain to another.

| ID | Result | Treatment in this manuscript | Principal assumptions | Inapplicable when |
|---|---|---|---|---|
| T-A1 | \(T_h(z)=z+hG_T(z)+o(h)\) | Derived directly from the generator limit in Section 7. | Right differentiability in the declared topology and coordinate. | Only continuity, a kink, or an undeclared coordinate is available. |
| T-A2 | Linear finite reconstruction | Standard semigroup/exponential result explained in Section 10. | Autonomous strongly continuous linear semigroup; bounded generator for the naive power series. | The domain is missing, the law is state-dependent, or jumps occur. |
| T-A3 | Nonlinear flow reconstruction | Standard ODE theorem invoked conditionally in Section 10. | Local existence and uniqueness, for example local Lipschitz regularity. | Evolution is nonunique, discontinuous, or outside the generator domain. |
| T-A4 | Ordered/nonautonomous reconstruction | Time-ordering construction stated in Section 10. | A declared evolution family and composition orientation. | A constant ordinary exponential is substituted without proof. |
| T-A5 | Loss-rate expansion | Derived from right differentiability in Section 9. | Declared carrier denominator and no hidden fixed-activation branch. | Absolute loss is divided by an unstated or vanishing denominator. |
| T-A6 | Burden integration | Chain-rule proof with jump correction in Sections 8 and 11. | Absolutely continuous segments, applicable derivative of \(V\), explicit nonoverlapping process accounts. | \(V\) is nonsmooth without a generalized rule or accounts overlap. |
| T-A7 | Exact recursive equivalence | Conditional semiconjugacy proof skeleton in Section 12. | History-wide dynamic equivalence plus burden, conservation, loss, commitment, and account preservation. | Only endpoints, snapshots, or a generator at one state agree. |
| T-A8 | Structural additivity | Conditional factorization and Möbius-cancellation proof in Section 19. | Product state, commuting evolution, disjoint ledgers, factorized burden, no hidden coupling. | Any shared constraint, queue, memory, or cross-factor burden remains. |
| T-A9 | KKT marginal equalization | Derived and numerically solved in Section 16. | Differentiability and constraint qualification; concavity/convexity for global sufficiency. | Discrete modes, nonconvexity, missing optimizer, or undeclared tie rules occur. |
| T-A10 | Aumann-Shapley closure | Chain-rule proof in Section 17. | Differentiable scalar total, radial path, \(C(0)=0\). | The scalar/path is absent or shares are labelled causal. |
| T-A11 | Exact finite interaction inversion | Full combinatorial proof in Section 13. | Finite complete subset domain and one frozen evaluation protocol. | A required subset is meaningless or the protocol changes between subsets. |
| T-A12 | Mixed difference/Hessian relation | Two applications of the fundamental theorem of calculus in Section 15. | \(C^2\) regularity on the entire rectangle. | Thresholds, projections, active-set switches, or topology changes cross the rectangle. |
| T-A13 | Leading commutator order effect | Second-order flow expansion in Section 15. | Sufficiently smooth local flows, compatible domains, and fixed sign/orientation. | Jumps, projections, or invalid unbounded-operator products occur. |
| T-A14 | Lowest complete common boundary | Architectural axiom and conditional sufficiency argument in Section 16. | A hierarchy with a unique complete common boundary, compatible units/timing, observations, and authority. | Overlapping authority or a DAG supplies no unique complete boundary. |
| T-A15 | Boundary interaction invariance | Forward and converse algebraic proofs in Section 18. | All exposed subsets use identical history and account semantics. | Only selected subsets or endpoint values agree. |
| T-A17 | Exact truncation residual | Exact Möbius reconstruction in Section 13. | Complete exact coefficients on the full subset lattice. | The residual is described as physical conservation or omitted coefficients are assumed small without evidence. |

Together these results form a proof ladder:

1. exact identities establish force, interaction reconstruction, share closure,
   and interaction preservation;
2. conditional analytical theorems carry local generators into finite,
   nonlinear, time-dependent, and hybrid evolution;
3. architectural rules require implementations to preserve the state,
   boundary, lifecycle, and accounting information those theorems need; and
4. domain evidence supplies the measured parameters and tests predictive use.

The layers reinforce one another. Algebra provides exact closure, analysis
provides finite evolution, architecture prevents semantic information from
being lost, and experiments connect a declared model to a real system.

---

## 23. Notation and the mandatory explanation order

### 23.1 Main notation

| Symbol | Meaning | Typical units or type |
|---|---|---|
| \(z\) | Complete represented state, including relevant commitments and memory. | Typed state vector, not necessarily one physical unit. |
| \(b=\pi(z)\) | Boundary projection visible to a parent or environment. | Typed boundary record. |
| \(V(z)\) | Declared collective burden field. | EBU under the declared version and boundary. |
| \(\mu=\nabla V\) | Marginal burden vector. | EBU per unit of each state coordinate. |
| \(S_e\) | State-change direction for one unit of edge participation. | State units per carrier unit. |
| \(f_e=-\mu^TS_e\) | Loss-aware generalized drive toward lower burden. | EBU per carrier unit. |
| \(J_e\) | Accepted edge flow rate or divisible quantity, according to its declared extent. | Carrier per extent unit, or carrier. |
| \(M_e\) | Mobility relating excess drive to flow. | Chosen so \(M_e(f_e-\theta_e)\) has units of \(J_e\). |
| \(\theta_e\) | Activation or opposition threshold. | Same units as \(f_e\). |
| \(\Psi_e(J)\) | Accumulated opposition/dissipation potential. | Drive times flow. |
| \(T_h\) | Finite transition over declared extent \(h\). | State map. |
| \(G_T\) | Local state generator \(\lim_{h\to0^+}(T_h-I)/h\). | State per extent unit. |
| \(L(h)\) | Useful carrier assigned to explicit loss over extent \(h\). | Carrier units. |
| \(\eta(h)\) | Useful output divided by declared carrier input. | Dimensionless. |
| \(E(S)\) | Finite outcome when exactly subset \(S\) is admitted under a frozen protocol. | Declared scalar outcome, often EBU. |
| \(I_S\) | Exact finite Möbius interaction coefficient for subset \(S\). | Same units as \(E\). |
| \([G_i,G_j]\) | Leading local order-effect generator under the stated sign convention. | State per squared extent unit when extents agree. |
| \(\lambda\) | KKT multiplier or shadow value of a binding constraint. | Objective units per constraint unit. |

### 23.2 Eight questions for every important equation

Future EBU books should not drop an equation into a paragraph and expect the
reader to infer its purpose. Every important mathematical presentation should
answer these questions in order:

1. **What are we trying to determine?**
2. **Which physical, economic, or institutional objects are involved?**
3. **What does every symbol mean, including its unit or type?**
4. **What is calculated, and through which steps?**
5. **What does the result mean physically or operationally?**
6. **Why is this calculation needed in the EBU system?**
7. **Which assumptions or limitations make the statement conditional?**
8. **When is the equation inapplicable, and what must be used instead?**

A small numerical or real-world example should follow when it genuinely helps;
it does not replace any of the eight questions.

---

## 24. Selected mathematical lineage

The construction in this manuscript combines established mathematical ideas
in a prospective EBU architecture. The sources below identify important
shoulders on which it stands; they do not validate EBU as a physical or
economic theory.

1. **Force, flux, and dissipation.** Lars Onsager's 1931 work related
   generalized thermodynamic forces, irreversible flows, and a dissipation
   function under specific near-equilibrium and microscopic-reversibility
   assumptions: [*Reciprocal Relations in Irreversible Processes I*](https://journals.aps.org/pr/abstract/10.1103/PhysRev.37.405)
   and [Part II](https://journals.aps.org/pr/abstract/10.1103/PhysRev.38.2265).
   EBU borrows the broad mathematical architecture of drive, opposition, and
   flow. Its burden \(V\) is not thermodynamic entropy or free energy, and its
   mobility \(M\) is not automatically an Onsager coefficient. No reciprocal
   symmetry is assumed here.

2. **Constrained marginal allocation.** The stationarity, feasibility, and
   complementary-slackness reasoning in Section 16 belongs to nonlinear
   programming. A foundational source is H. W. Kuhn and A. W. Tucker,
   [*Nonlinear Programming*](https://www.degruyterbrill.com/document/doi/10.1525/9780520411586-036/html),
   1951, pp. 481–492. EBU must still declare the feasible set, objective,
   constraint qualifications, and institutional limits of the result.

3. **Möbius inversion.** Exact conversion between subset outcomes and
   interaction coefficients is an instance of Möbius inversion on a finite
   partially ordered set. A foundational treatment is G.-C. Rota,
   [*On the Foundations of Combinatorial Theory I: Theory of Möbius Functions*](https://doi.org/10.1007/BF00531932),
   1964. The EBU contribution is the frozen subset protocol, typed semantics,
   explicit empty baseline, and linkage to recursive boundaries and
   interaction topology—not the inversion formula itself.

4. **Infinitesimal shares.** The path-integral decomposition in Section 17 is
   connected to R. J. Aumann and L. S. Shapley,
   [*Values of Non-Atomic Games*](https://www.degruyterbrill.com/document/doi/10.1515/9781400867080/html),
   originally published in 1974. EBU treats the radial path as an explicit
   scalar-decomposition convention and does not silently convert it into
   causality, fairness, or settlement entitlement.

5. **Generators, flows, and commutators.** The limit defining \(G_T\), finite
   reconstruction through flows or semigroups, time ordering, and Lie brackets
   belong to established analysis, dynamical-systems, and differential-
   geometry traditions. The EBU synthesis uses them to join divisible
   transaction participation, complete augmented-state evolution, long
   actions, recursive encapsulation, and local order effects. Every use still
   needs a declared state space, topology, domain, regularity, coordinate, and
   unit.

### 24.1 What is distinctive in the EBU synthesis

The individual tools—nonatomic participation, generators, flow networks,
Möbius interaction, and marginal allocation—have established mathematical
histories. The potentially distinctive contribution is their particular EBU
synthesis:

$$
\boxed{
\text{burden field}
\to\text{loss-aware force}
\to\text{dissipative flow}
\to\text{state generator}
\to\text{finite and hybrid transition}
\to\text{history-equivalent recursion}
\to\text{exact finite interaction}
\to\text{joint allocation with causal and settlement separation}.
}
$$

The distinct value lies in the way EBU connects these ideas. The burden field
is carried through a loss-aware force into flow; flow becomes a complete state
generator; generators reconstruct finite and hybrid transactions; recursive
boundaries preserve externally visible behaviour and interaction; and joint
allocation remains separate from causal and settlement claims. Establishing
historical novelty still requires a dedicated literature review, but the
mathematical contribution of the synthesis can already be stated, audited, and
tested proposition by proposition.

---

## Closing perspective

The economic atom is not a tiny apple, a tiny actor, or a positive indivisible
coin. It is what remains when the finite size of an admissible continuous
participation is removed while its normalized first-order transformation law
is retained:

$$
\boxed{
G_T(z)=\lim_{h\to0^+}\frac{T_h(z)-z}{h}.
}
$$

That local law connects backward to burden and force and forward to complete
finite trajectories. This creates a continuous explanatory line:

$$
\boxed{
V
\to\mu
\to f
\to\Psi
\to J
\to G_T
\to T_h
\to\operatorname{EBU}(T_h;z).
}
$$

The interaction theory then adds a second line:

$$
\boxed{
\text{divisible actions}
\to\text{joint feasible region}
\to\text{finite subset outcomes}
\to\text{higher-order interaction}
\to\text{interaction topology}
\to\text{marginal allocation}.
}
$$

Taken together, these results give EBU:

- a rigorous meaning for the economic atom;
- a scale-consistent relation between local efficiency, loss, and finite
  transactions;
- a representation of long actions that includes commitments and jumps;
- a proof-oriented rule for placing a graph inside a parent graph;
- an exact method for measuring pair and higher-order group effects;
- a criterion for when large problems can be solved independently in parallel;
  and
- a principled method for resolving divisible requests at a shared constraint.

Those are substantial advances. They close several structural gaps that
previously forced EBU to rely on broad assumptions: the smallest-transaction
question, the treatment of long actions, proportional allocation as a default,
pair-only interaction topology, snapshot-only encapsulation, and unexplained
parallel independence. The next scientific and implementation tasks now begin
from a much stronger foundation because the project knows exactly which object
is changing, how local changes compose, where interactions appear, and which
boundary owns the shared constraint.
