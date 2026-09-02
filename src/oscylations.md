Yes—your intuition is close. The important correction is this:

\[
\boxed{
\text{Möbius inversion reveals the interaction error. The closed feedback loop can create the oscillation.}
}
\]

It is therefore better to say:

> EBU measures the system, Möbius inversion separates its interaction components, a controller reacts to an interaction error, the correction changes the future system, and the effect returns through the next measurement. If the correction is too strong, delayed, or persistent, the system can repeatedly overshoot and oscillate.

The oscillation is **not produced by Möbius inversion alone**. Möbius inversion tells the correction mechanism what kind of interaction error it is reacting to.

Let us build this very slowly.

# 1. First separate five different things

The confusion disappears once we stop treating everything as one process.

There are five different objects:

\[
\boxed{
\text{real system}
\rightarrow
\text{measurements}
\rightarrow
\text{interactions}
\rightarrow
\text{error}
\rightarrow
\text{correction}
}
\]

Then the correction acts on the real system, so the process starts again.

More explicitly:

```text
real system
    ↓
measure subset totals
    ↓
apply Möbius inversion
    ↓
obtain interaction values
    ↓
compare with a target or constraint
    ↓
calculate an error
    ↓
produce a correction
    ↓
correction changes the real system
    ↓
measure again
```

The last arrow closes the feedback loop.

The “coming back” part does not mean that an error travels backward in time. It means:

1. the present error causes a correction;
2. the correction affects the future state;
3. the future state is measured again;
4. the next error contains the consequence of the earlier correction.

That is feedback.

# 2. Begin with the real measurements

Suppose we have two participants, \(A\) and \(B\).

We measure:

\[
e_A=10,
\qquad
e_B=10,
\qquad
e_{AB}=30.
\]

These numbers mean:

- \(A\) alone gives \(10\);
- \(B\) alone gives \(10\);
- \(A\) and \(B\) together give \(30\).

At this stage, we only have measured totals.

The joint total \(30\) contains several things mixed together:

\[
30
=
10
+
10
+
10.
\]

The first \(10\) belongs to \(A\)'s individual baseline.

The second \(10\) belongs to \(B\)'s individual baseline.

The final \(10\) is the additional pair interaction.

Möbius inversion separates that final part:

\[
\iota_{AB}
=
e_{AB}-e_A-e_B.
\]

Therefore,

\[
\iota_{AB}
=
30-10-10
=
10.
\]

This says:

> The pair produced \(10\) more than the declared individual baselines predict.

Nothing is moving yet. Nothing is oscillating. We have performed only an accounting decomposition.

# 3. Möbius inversion is initially only an observation tool

At one moment in time, we calculate

\[
\boldsymbol{\iota}=M\mathbf e.
\]

Read this as:

> Take the list of measured subset totals \(\mathbf e\), and use the Möbius transformation \(M\) to recover the separated interaction components \(\boldsymbol{\iota}\).

If the measured totals remain constant,

\[
\mathbf e(t)=\text{constant},
\]

then the interaction coefficients also remain constant:

\[
\boldsymbol{\iota}(t)
=
M\mathbf e(t)
=
\text{constant}.
\]

Möbius inversion cannot take an unchanging measurement and mysteriously create a changing interaction.

For example, if every day we measure

\[
e_A=10,\qquad e_B=10,\qquad e_{AB}=30,
\]

then every day we calculate

\[
\iota_{AB}=10.
\]

There is no sequence like

\[
10,-5,3,-2,\ldots
\]

unless something in the real system or its correction process changes over time.

So at this first stage:

\[
\boxed{
\text{Möbius inversion describes the interaction. It does not yet control it.}
}
\]

# 4. Now introduce an interaction target

Suppose the desired or permitted pair interaction is

\[
\iota_{AB}^{*}=0.
\]

The star means “reference” or “target.”

This does not necessarily mean that positive interaction is bad. I am choosing zero only to make the example simple.

The current interaction is

\[
\iota_{AB}=10.
\]

The interaction error is therefore

\[
p
=
\iota_{AB}-\iota_{AB}^{*}.
\]

So:

\[
p=10-0=10.
\]

Here \(p\) means the difference between the observed interaction and the target interaction.

In this mathematical context, **error does not mean personal guilt or wrongdoing**. It means a residual:

\[
\boxed{
\text{error}
=
\text{observed quantity}
-
\text{reference quantity}.
}
\]

It could represent:

- deviation from a target;
- conservation residual;
- model mismatch;
- calibration error;
- policy deviation;
- inconsistency between predicted and measured interaction.

Now Möbius inversion has done something useful. Instead of merely saying:

> “The joint total is \(30\),”

we can say:

> “The individual components are normal, but the pair-interaction component is \(10\) above its declared reference.”

That gives the correction mechanism much more specific information.

# 5. Passive Möbius analysis and active Möbius feedback are different

There are two fundamentally different systems.

## Passive analysis

```text
measurement
    ↓
Möbius inversion
    ↓
interaction report
```

The process stops there.

No correction is produced. The real system is not changed.

In this case, Möbius inversion cannot create oscillation.

## Active feedback

```text
measurement
    ↓
Möbius inversion
    ↓
interaction error
    ↓
controller
    ↓
correction
    ↓
real system changes
    ↓
new measurement
```

Now the calculation affects future behaviour.

This is a genuine closed loop.

It is therefore accurate to say that we are studying:

\[
\boxed{
\text{feedback driven by Möbius-resolved interaction errors}.
}
\]

It is less accurate to say that the oscillation exists “inside Möbius inversion.” The inversion is the measurement and decomposition stage inside the larger feedback system.

# 6. A first numerical feedback loop

Let us continue with the pair \(A,B\).

Their individual values remain fixed:

\[
e_A=e_B=10.
\]

Therefore their ordinary additive baseline is

\[
e_A+e_B=20.
\]

The pair interaction is

\[
\iota_{AB}=e_{AB}-20.
\]

Suppose the initial joint total is

\[
e_{AB}=30.
\]

Then:

\[
\iota_{AB}=30-20=10.
\]

The target interaction is zero, so the error is \(10\).

Now introduce a correction rule:

\[
\text{correction}
=
-gp.
\]

Here \(g\) is the correction gain.

The minus sign means the correction acts against the error.

If the error is positive, the controller pushes downward.

If the error is negative, the controller pushes upward.

Suppose

\[
g=1.5.
\]

The controller reacts to an error of \(10\) with:

\[
-1.5(10)=-15.
\]

It applies a change of \(-15\).

The old interaction was \(10\), so the next interaction becomes:

\[
10-15=-5.
\]

The correction was too strong. Instead of stopping at zero, the interaction crossed the target and became negative.

The new joint total is:

\[
e_{AB}=20+(-5)=15.
\]

Originally the total was too high relative to the target:

\[
30>20.
\]

After correction, it is too low:

\[
15<20.
\]

Now EBU measures again.

Möbius inversion calculates:

\[
\iota_{AB}=15-10-10=-5.
\]

The new error is \(-5\).

Because the error is now negative, the next correction has the opposite sign:

\[
-1.5(-5)=+7.5.
\]

The interaction becomes:

\[
-5+7.5=2.5.
\]

Now it is positive again.

The next correction is:

\[
-1.5(2.5)=-3.75,
\]

so the interaction becomes:

\[
2.5-3.75=-1.25.
\]

Then:

\[
-1.25
\rightarrow
0.625
\rightarrow
-0.3125
\rightarrow
0.15625.
\]

The full interaction sequence is:

\[
\boxed{
10
\rightarrow
-5
\rightarrow
2.5
\rightarrow
-1.25
\rightarrow
0.625
\rightarrow
-0.3125
\rightarrow\cdots
}
\]

The corresponding joint totals are:

\[
\boxed{
30
\rightarrow
15
\rightarrow
22.5
\rightarrow
18.75
\rightarrow
20.625
\rightarrow
19.6875
\rightarrow\cdots
}
\]

The target joint total is \(20\).

The system repeatedly crosses that target:

\[
\text{above}
\rightarrow
\text{below}
\rightarrow
\text{above}
\rightarrow
\text{below}.
\]

At the same time, the distance from the target becomes smaller.

That is a **damped discrete oscillation**.

# 7. The complete calculation in one equation

The update rule is:

\[
\iota_{n+1}
=
\iota_n-g\iota_n.
\]

So:

\[
\iota_{n+1}
=
(1-g)\iota_n.
\]

With

\[
g=1.5,
\]

we get:

\[
1-g=-0.5.
\]

Therefore:

\[
\iota_{n+1}
=
-0.5\iota_n.
\]

The minus sign causes the direction to alternate.

The magnitude \(0.5\) causes the oscillation to shrink.

That single number tells us most of the behaviour.

When

\[
0<g<1,
\]

then

\[
0<1-g<1.
\]

The error keeps the same sign and becomes smaller:

\[
10\rightarrow5\rightarrow2.5\rightarrow1.25.
\]

That is monotonic convergence. There is no overshoot.

When

\[
g=1,
\]

then

\[
1-g=0.
\]

The simple idealized controller reaches the target in one step.

When

\[
1<g<2,
\]

then

\[
-1<1-g<0.
\]

The sign alternates, but the magnitude shrinks:

\[
10\rightarrow-5\rightarrow2.5\rightarrow-1.25.
\]

That is damped oscillation.

When

\[
g=2,
\]

then

\[
1-g=-1.
\]

The sequence becomes:

\[
10\rightarrow-10\rightarrow10\rightarrow-10.
\]

The oscillation does not shrink.

When

\[
g>2,
\]

the magnitude grows:

\[
10\rightarrow-15\rightarrow22.5\rightarrow-33.75.
\]

That is an unstable growing oscillation.

This gives us an immediate and very useful deduction:

\[
\boxed{
\text{A correction can be directionally correct but dynamically too strong.}
}
\]

Every correction in the example opposes the current error. Nevertheless, excessive gain causes repeated overshoot.

That is one of the central reasons feedback stability matters to EBU.

# 8. What exactly is “coming back”?

Consider the sequence again:

\[
10
\rightarrow
-5
\rightarrow
2.5
\rightarrow
-1.25.
\]

The original positive error does not literally return.

What returns is the **consequence of the previous correction**.

At the first step:

\[
\text{positive error}
\rightarrow
\text{negative correction}.
\]

At the second measurement, that correction has pushed the system below the target:

\[
\text{negative error}.
\]

The controller now reverses:

\[
\text{negative error}
\rightarrow
\text{positive correction}.
\]

That positive correction pushes the system above the target again.

So the returning loop is:

\[
\boxed{
\text{error}
\rightarrow
\text{correction}
\rightarrow
\text{new state}
\rightarrow
\text{new error of the opposite sign}.
}
\]

This repeated sign reversal is what creates the back-and-forth behaviour.

A useful everyday analogy is steering a car.

Suppose the car drifts too far right. You turn the steering wheel left. If you hold the correction for too long, the car crosses the centre and moves too far left. You then turn right. If each response is delayed or excessive, the car moves from side to side.

The lane markings did not create the movement. They helped you measure the error.

Similarly, Möbius inversion does not create the oscillation. It helps the controller determine **which interaction component is away from its reference**.

# 9. Why the simple example jumps rather than moves smoothly

The preceding example uses separate correction rounds:

\[
n=0,1,2,3,\ldots
\]

That is appropriate for systems updated in steps:

- daily accounting;
- weekly resource allocation;
- repeated model updates;
- periodic settlements;
- inspection-and-correction cycles;
- discrete governance decisions.

Each round measures, calculates and corrects.

But some systems change continuously. Their curves look smoother rather than jumping from one number to another.

For smooth continuous oscillation, we normally need an additional correction state, inertia, delay, or memory.

This is where the second part of our mathematical result becomes important.

# 10. Introduce a stored correction state

Let

\[
p(t)
\]

be one Möbius-resolved interaction error.

For example:

\[
p(t)
=
\iota_{AB}(t)-\iota_{AB}^{*}.
\]

Now introduce

\[
c(t),
\]

a correction state.

The correction state could represent, depending on the declared application:

- accumulated correction pressure;
- an active adjustment that takes time to disappear;
- a delayed institutional response;
- a calibration process already in progress;
- stored control effort;
- unresolved repair work;
- a gradual settlement;
- a controller with memory.

The model is:

\[
\begin{aligned}
\dot p&=-ap+bc,\\
\dot c&=-kp-dc.
\end{aligned}
\]

Let us interpret every term.

# 11. Reading the first equation

The first equation is:

\[
\dot p=-ap+bc.
\]

The dot means rate of change over time.

So \(\dot p\) means:

> How quickly is the interaction error changing now?

The term

\[
-ap
\]

represents natural reduction or damping of the error.

When \(a>0\), a positive \(p\) receives a negative contribution, pushing it toward zero.

A negative \(p\) receives a positive contribution, also pushing it toward zero.

The term

\[
bc
\]

describes how the correction state affects the interaction error.

When \(b>0\):

- positive \(c\) pushes \(p\) upward;
- negative \(c\) pushes \(p\) downward.

# 12. Reading the second equation

The second equation is:

\[
\dot c=-kp-dc.
\]

The term

\[
-kp
\]

means the controller reacts against the interaction error.

When \(p>0\), this term is negative, so the correction state moves downward.

When \(p<0\), this term is positive, so the correction state moves upward.

The term

\[
-dc
\]

makes the correction state gradually fade.

So \(d\) describes how quickly old correction pressure disappears.

A high \(d\) means the correction state forgets quickly.

A low \(d\) means the correction persists for longer.

# 13. Now follow the continuous loop slowly

Suppose the system starts with:

\[
p>0,
\qquad
c=0.
\]

The interaction is above its target, but no correction has accumulated yet.

Because

\[
\dot c=-kp-dc,
\]

and \(p>0\), we initially have:

\[
\dot c<0.
\]

So \(c\) begins becoming negative.

A negative \(c\) enters the first equation:

\[
\dot p=-ap+bc.
\]

Because \(bc<0\), the correction pushes \(p\) downward.

So far, everything is sensible:

```text
interaction error is positive
        ↓
negative correction accumulates
        ↓
interaction error moves toward zero
```

But here is the important part.

When \(p\) reaches zero, the correction state \(c\) may still be negative.

It does not disappear instantaneously.

Therefore, even though the error has reached the target, the existing correction continues pushing:

\[
bc<0.
\]

As a result, \(p\) crosses zero and becomes negative.

This is overshoot.

Now the interaction is below the target.

Because \(p<0\),

\[
-kp>0.
\]

The correction state begins reversing upward.

But this reversal also takes time.

While \(c\) is still negative, it continues pushing \(p\) downward.

Eventually \(c\) reaches zero and becomes positive.

A positive \(c\) then pushes \(p\) upward.

The error moves back toward zero, crosses it, and may become positive again.

Then the entire process repeats.

The cycle is:

```text
p positive
    ↓
c becomes negative
    ↓
p falls
    ↓
p crosses zero, but c is still negative
    ↓
p overshoots and becomes negative
    ↓
c slowly reverses
    ↓
c becomes positive
    ↓
p rises
    ↓
p crosses zero, but c is still positive
    ↓
p overshoots and becomes positive
```

That is the smooth feedback oscillation.

# 14. The deepest intuitive cause is lag

The correction state does not change at exactly the same moment as the error.

It follows the error with a lag.

That lag means the correction is still acting in the old direction when the system has already reached the target.

This produces overshoot.

Then the correction reverses too late in the opposite direction.

That creates another overshoot.

Repeated delayed reversal creates oscillation.

So a very simple verbal explanation is:

\[
\boxed{
\text{The correction remembers the old error for long enough to push the system beyond the target.}
}
\]

That is the central mechanism.

# 15. Why adding a correction state changes the mathematics

Without the correction state, suppose the error follows:

\[
\dot p=-ap.
\]

Its solution is:

\[
p(t)=p(0)e^{-at}.
\]

It simply approaches zero.

It does not repeatedly cross zero.

A standard one-dimensional first-order autonomous system has only one direction available at each point on its line. It cannot spiral around an equilibrium.

After adding \(c\), the state becomes two-dimensional:

\[
(p,c).
\]

The system can now move around the origin in the \((p,c)\) plane.

Imagine a point whose horizontal position is \(p\) and whose vertical position is \(c\).

It may follow a path like:

```text
p positive, c zero
        ↓
p positive, c negative
        ↓
p zero, c negative
        ↓
p negative, c negative
        ↓
p negative, c zero
        ↓
p negative, c positive
        ↓
p zero, c positive
        ↓
p positive, c positive
```

The point moves around the origin.

If damping is present, the circular movement shrinks into a spiral.

The horizontal coordinate \(p\) then appears to move:

\[
\text{positive}
\rightarrow
\text{zero}
\rightarrow
\text{negative}
\rightarrow
\text{zero}
\rightarrow
\text{positive}.
\]

That is the observed oscillation.

# 16. Deriving the oscillation equation slowly

We begin with:

\[
\dot p=-ap+bc.
\]

Differentiate both sides:

\[
\ddot p=-a\dot p+b\dot c.
\]

The second original equation says:

\[
\dot c=-kp-dc.
\]

Substitute this into the equation for \(\ddot p\):

\[
\ddot p
=
-a\dot p+b(-kp-dc).
\]

Expand:

\[
\ddot p
=
-a\dot p-bkp-bdc.
\]

From the first equation:

\[
\dot p=-ap+bc.
\]

Therefore:

\[
bc=\dot p+ap.
\]

Multiply by \(d\):

\[
bdc=d\dot p+adp.
\]

Substitute this into the previous expression:

\[
\ddot p
=
-a\dot p-bkp-d\dot p-adp.
\]

Collect the \(\dot p\) terms:

\[
\ddot p
=
-(a+d)\dot p-(ad+bk)p.
\]

Move everything to the left:

\[
\boxed{
\ddot p+(a+d)\dot p+(ad+bk)p=0.
}
\]

This is a second-order equation.

It has the same broad mathematical form as many damped adjustment systems.

The first-derivative term,

\[
(a+d)\dot p,
\]

provides damping.

The \(p\) term,

\[
(ad+bk)p,
\]

provides the restoring effect that pushes the system back toward equilibrium.

# 17. The exact oscillation condition

The characteristic equation is:

\[
\lambda^2+(a+d)\lambda+(ad+bk)=0.
\]

Its solutions are:

\[
\lambda_{\pm}
=
-\frac{a+d}{2}
\pm
\frac12\sqrt{(a-d)^2-4bk}.
\]

The system has an oscillatory mode when the quantity under the square root is negative:

\[
(a-d)^2-4bk<0.
\]

Equivalently:

\[
\boxed{
4bk>(a-d)^2.
}
\]

This condition has an intuitive meaning.

The product

\[
bk
\]

measures the strength of the round-trip feedback:

```text
error p
    ↓ through k
correction c
    ↓ through b
error p
```

A larger \(k\) means the correction mechanism reacts more strongly to error.

A larger \(b\) means the accumulated correction affects the system more strongly.

So \(bk\) measures the strength of the complete error-correction-error loop.

When that coupling is sufficiently strong relative to the damping structure, the system does not merely return smoothly. It overshoots and oscillates.

# 18. A concrete smooth example

Choose:

\[
a=d=b=k=1.
\]

The model becomes:

\[
\begin{aligned}
\dot p&=-p+c,\\
\dot c&=-p-c.
\end{aligned}
\]

The second-order equation is:

\[
\ddot p+2\dot p+2p=0.
\]

Its eigenvalues are:

\[
\lambda_{\pm}=-1\pm i.
\]

For suitable initial conditions, such as

\[
p(0)=1,\qquad c(0)=0,
\]

the solution is:

\[
p(t)=e^{-t}\cos t,
\]

and

\[
c(t)=-e^{-t}\sin t.
\]

Let us read this without worrying about advanced mathematics.

The factor

\[
\cos t
\]

causes the positive-negative-positive alternation.

The factor

\[
e^{-t}
\]

causes the amplitude to shrink.

So the interaction error behaves like:

```text
large positive
    ↓
zero
    ↓
negative
    ↓
zero
    ↓
smaller positive
    ↓
zero
    ↓
smaller negative
```

That is a damped oscillation.

The correction \(c(t)\) is shifted relative to the error \(p(t)\).

When \(p\) is at its largest positive value, \(c\) is initially zero and only beginning to react.

When \(p\) reaches zero, \(c\) is still strongly negative.

That is why the system overshoots.

The correction is not synchronized perfectly with the error. Its lag creates the rotation.

# 19. The correction channel creates memory

There is another way to understand the same mechanism.

Start with:

\[
\dot c=-kp-dc.
\]

Its solution can be written as:

\[
c(t)
=
e^{-dt}c(0)
-
k\int_0^t e^{-d(t-\tau)}p(\tau)\,d\tau.
\]

The integral contains earlier values of \(p\).

That means the current correction state depends on the history:

\[
p(\tau),
\qquad
0\leq\tau\leq t.
\]

Old errors do not have equal influence forever. The factor

\[
e^{-d(t-\tau)}
\]

makes older information gradually fade.

Substituting this into the \(p\) equation gives:

\[
\dot p(t)
=
-ap(t)
+
be^{-dt}c(0)
-
bk\int_0^t
e^{-d(t-\tau)}p(\tau)\,d\tau.
\]

This says:

> The present change in the interaction error depends partly on an accumulation of previous interaction errors.

That is the mathematical memory of the correction mechanism.

This is probably very close to what you mean by a “coming-back correction.”

The earlier error is stored inside \(c\). Its effect remains active later, even after the immediate error has changed.

But this is better called:

\[
\boxed{
\text{feedback memory}
}
\]

or

\[
\boxed{
\text{a delayed or persistent correction channel}.
}
\]

It is not yet a physical wave.

# 20. Where Möbius inversion sits inside this model

Suppose:

\[
p(t)
=
\iota_{AB}(t)-\iota_{AB}^{*}.
\]

And:

\[
\iota_{AB}(t)
=
e_{AB}(t)-e_A(t)-e_B(t).
\]

Then:

\[
p(t)
=
e_{AB}(t)-e_A(t)-e_B(t)-\iota_{AB}^{*}.
\]

This is the interaction-specific error that drives the correction state.

The loop is:

\[
\boxed{
\mathbf e
\xrightarrow{M}
\boldsymbol{\iota}
\xrightarrow{\text{compare}}
\mathbf p
\xrightarrow{\text{controller}}
\mathbf c
\xrightarrow{\text{action}}
\text{future }\mathbf e.
}
\]

Möbius inversion gives the controller a structured error signal.

It can distinguish:

- individual error;
- pair-interaction error;
- three-way interaction error;
- higher-order interaction error.

Without Möbius inversion, a controller might react only to a combined total and fail to know which level of the system produced the deviation.

For example, a joint total of \(30\) might be caused by:

- \(A\)'s individual value increasing;
- \(B\)'s individual value increasing;
- the pair interaction increasing;
- several changes happening together.

Möbius inversion separates these possibilities.

So Möbius inversion improves the **informational precision** of the feedback loop.

# 21. Möbius inversion can influence controller design without being the dynamical cause

There is an important subtlety.

Suppose we first use Möbius inversion only to display information. Then it does not change the system.

But suppose we build a controller that reacts differently to different Möbius interaction coefficients.

Then Möbius information affects decisions.

For example:

```text
individual A component is normal
individual B component is normal
pair interaction AB is abnormal
```

A Möbius-informed controller might correct only the \(AB\) relationship.

A controller using only the total might incorrectly modify both individual components.

Therefore, Möbius inversion can enable a new and more targeted feedback mechanism.

But the resulting dynamics come from the full combination:

\[
\boxed{
\text{measurement}
+
\text{Möbius decomposition}
+
\text{decision rule}
+
\text{correction strength}
+
\text{delay}
+
\text{real-system response}.
}
\]

Möbius inversion alone is not the cause.

A precise statement is:

\[
\boxed{
\text{Möbius coordinates determine what the controller sees; the feedback law determines what the system does.}
}
\]

# 22. \(Z\) is not automatically a real-world correction mechanism

We have:

\[
\mathbf e=Z\boldsymbol{\iota}.
\]

This means \(Z\) reconstructs subset totals from interaction components.

If we propose an interaction change

\[
\delta\boldsymbol{\iota},
\]

then:

\[
\delta\mathbf e
=
Z\delta\boldsymbol{\iota}
\]

tells us what changes in the totals would mathematically correspond to that interaction change.

But this does not tell us how to produce those changes in reality.

That distinction is extremely important.

\[
\boxed{
\text{Accounting reconstruction is not physical or institutional actuation.}
}
\]

The real system needs a separately declared response map.

For example:

\[
\mathbf x_{n+1}=F(\mathbf x_n,\mathbf u_n),
\]

where:

- \(\mathbf x_n\) is the real state;
- \(\mathbf u_n\) is the intervention;
- \(F\) describes how that intervention changes the real state.

Möbius inversion tells us what interaction error we have.

\(Z\) tells us how interaction components add into totals.

Neither automatically tells us which real action will change that interaction safely.

That action mechanism must be declared and tested separately.

This protects EBU from assuming magical control.

# 23. The general mathematical loop

A general discrete EBU feedback system could be written as:

\[
\mathbf e_n
=
H(\mathbf x_n),
\]

meaning the real state \(\mathbf x_n\) produces measured subset totals \(\mathbf e_n\).

Then:

\[
\boldsymbol{\iota}_n=M\mathbf e_n.
\]

The interaction error is:

\[
\mathbf r_n
=
\boldsymbol{\iota}_n-\boldsymbol{\iota}^{*}.
\]

The controller produces:

\[
\mathbf u_n=C(\mathbf r_n,\mathbf c_n),
\]

where \(\mathbf c_n\) may contain stored correction state.

The real system then evolves:

\[
\mathbf x_{n+1}
=
F(\mathbf x_n,\mathbf u_n).
\]

The loop repeats:

\[
\mathbf x_{n+1}
\rightarrow
\mathbf e_{n+1}
\rightarrow
\boldsymbol{\iota}_{n+1}
\rightarrow
\mathbf r_{n+1}.
\]

Oscillation can arise because the intervention based on \(\mathbf r_n\) produces a future error \(\mathbf r_{n+1}\) with the opposite sign.

# 24. The exact separation from the coordinate theorem

Before feedback, suppose total-value dynamics are:

\[
\dot{\mathbf e}=A_E\mathbf e.
\]

In Möbius coordinates:

\[
\dot{\boldsymbol{\iota}}
=
MA_EZ\boldsymbol{\iota}.
\]

Therefore:

\[
A_I=MA_EZ.
\]

Because \(M=Z^{-1}\), this is only a coordinate transformation.

The matrices \(A_E\) and \(A_I\) have the same eigenvalues.

So Möbius inversion alone cannot create a new oscillatory eigenvalue.

Now add a correction state:

\[
\begin{aligned}
\dot{\boldsymbol{\iota}}
&=
A_I\boldsymbol{\iota}+B\mathbf c,\\
\dot{\mathbf c}
&=
-G(\boldsymbol{\iota}-\boldsymbol{\iota}^{*})
-D\mathbf c.
\end{aligned}
\]

Around the target equilibrium, the combined matrix is approximately:

\[
\begin{bmatrix}
A_I&B\\
-G&-D
\end{bmatrix}.
\]

That matrix is not merely \(A_I\) written differently.

It contains new couplings:

\[
B
\quad\text{and}\quad
G.
\]

It also contains additional correction states.

Those additions can change the eigenvalues.

They can introduce:

- faster decay;
- slower decay;
- overshoot;
- damped oscillation;
- persistent oscillation;
- growing instability.

That is the exact mathematical location of the new behaviour.

\[
\boxed{
\text{The coordinate transformation preserves modes. The closed-loop augmentation may change them.}
}
\]

# 25. What “oscillatory mode” means in a larger EBU system

With only one interaction error, oscillation is easy to picture:

\[
+\rightarrow-\rightarrow+\rightarrow-.
\]

In a larger system, we may have many interaction coordinates:

\[
\boldsymbol{\iota}
=
\begin{bmatrix}
\iota_A\\
\iota_B\\
\iota_C\\
\iota_{AB}\\
\iota_{AC}\\
\iota_{BC}\\
\iota_{ABC}
\end{bmatrix}.
\]

An oscillatory mode might be a coordinated pattern such as:

- \(\iota_{AB}\) rises;
- \(\iota_{AC}\) falls;
- \(\iota_{ABC}\) changes with a delay;
- then all three reverse.

The mode is not merely one number. It is a pattern across several coordinates that repeats over time.

Möbius coordinates can make that pattern interpretable.

Instead of saying:

> “Several subset totals are moving strangely,”

we may be able to say:

> “The oscillatory pattern is concentrated mainly in the \(AB\) pair interaction and the \(ABC\) three-way interaction, while individual components remain stable.”

That is what it means for Möbius coordinates to expose the interaction structure of an oscillation.

# 26. What we have actually discovered

We should use the word “discovered” carefully.

We have not established:

\[
\text{Every EBU system necessarily oscillates.}
\]

We have not established:

\[
\text{Möbius inversion produces a universal wave.}
\]

We have not experimentally observed a universal natural EBU frequency.

What we have established mathematically is more precise:

\[
\boxed{
\text{A feedback system driven by Möbius-resolved interaction errors can have oscillatory modes under explicit gain, coupling, damping, memory, or delay conditions.}
}
\]

We have also established:

\[
\boxed{
\text{A fixed invertible Möbius transformation does not create those modes by itself.}
}
\]

And:

\[
\boxed{
\text{Möbius coordinates can reveal which subset interactions participate in the mode.}
}
\]

The mathematical tools themselves—Möbius inversion, feedback stability, eigenvalues and damped oscillators—are established mathematics.

The project-level contribution is their disciplined combination inside EBU:

\[
\boxed{
\text{interaction measurement}
+
\text{interaction-specific error}
+
\text{persistent correction state}
+
\text{closed-loop stability analysis}.
}
\]

# 27. Is it a wave?

The graph of \(p(t)\) may look wave-like:

\[
p(t)=e^{-\sigma t}\cos(\omega t).
\]

It rises and falls like a familiar wave shape.

But a time oscillation at one state variable is not automatically a physical wave.

A physical wave normally requires some form of propagation:

- through space;
- through a network;
- between locations or components;
- with a declared propagation mechanism;
- with meaningful units;
- often with a propagation speed or dispersion law.

Our two-state feedback model establishes:

\[
\boxed{
\text{temporal feedback oscillation}.
}
\]

It does not yet establish:

\[
\boxed{
\text{physical wave propagation}.
}
\]

The safer project terms are:

- damped feedback oscillation;
- correction ringing;
- closed-loop oscillatory mode;
- repeated overshoot;
- interaction-error oscillation.

“Coming-back wave” is a useful intuition, but it should remain a metaphor unless a separate propagation model is declared and validated.

# 28. The important measurable features

Once a feedback model is declared, the oscillation has several mathematical properties.

If its eigenvalues are:

\[
\lambda_{\pm}
=
-\sigma\pm i\omega,
\]

then \(\sigma\) describes damping.

If:

\[
\sigma>0,
\]

the amplitude shrinks.

If:

\[
\sigma=0,
\]

the idealized amplitude remains constant.

If:

\[
\sigma<0,
\]

the amplitude grows, indicating instability.

The quantity \(\omega\) is the angular frequency.

The period is:

\[
T=\frac{2\pi}{\omega}.
\]

We can also measure:

- maximum overshoot;
- time to settle near the target;
- number of target crossings;
- sensitivity to correction gain;
- sensitivity to delay;
- memory-decay time;
- which interaction coordinates carry the oscillation;
- whether the oscillation is visible in actual measurements;
- whether the correction mechanism can control the oscillating mode.

These are not merely aesthetic properties. They help determine whether a correction rule is safe.

# 29. Why this matters so much to EBU

Suppose EBU correctly detects a negative interaction.

That does not guarantee that every correction response will improve the system.

A poorly designed correction could produce:

\[
\text{negative interaction}
\rightarrow
\text{strong repair}
\rightarrow
\text{positive overshoot}
\rightarrow
\text{strong reversal}
\rightarrow
\text{negative overshoot}.
\]

The correction process might become more disruptive than the original error.

This could occur in:

- resource reallocation;
- calibration;
- incentive adjustment;
- institutional settlement;
- model correction;
- team restructuring;
- evidence weighting;
- repeated policy updates.

The stability theory allows EBU to ask:

> How strongly should we react?

> How much delay is acceptable?

> How long does a correction remain active?

> Should a new correction begin before the previous one has settled?

> Does the correction target the actual problematic interaction or disturb unrelated components?

> Is the observed oscillation already in the underlying system, or did our correction rule introduce it?

These are central design questions.

# 30. The strongest project insight

The strongest insight is not simply:

> “We found a curve that moves up and down.”

It is:

\[
\boxed{
\text{EBU can separate the origin, location and consequence of an oscillation.}
}
\]

The **origin** asks:

> Did the underlying system already contain the oscillatory mode, or did feedback create it?

The **location** asks:

> Which individual, pair, triple or higher-order interaction carries the mode?

The **consequence** asks:

> Is the oscillation harmless, useful, slowly damped, persistently disruptive or unstable?

Möbius inversion mainly helps with location and interpretation.

Feedback mathematics mainly helps with origin and consequence.

Together, they give EBU a much stronger dynamic diagnostic.

# 31. The complete mental movie

Here is the whole idea as one slow sequence.

### Moment 1: measure

EBU measures all relevant subset totals:

\[
\mathbf e_0.
\]

### Moment 2: separate

Möbius inversion calculates:

\[
\boldsymbol{\iota}_0=M\mathbf e_0.
\]

Now individual and interaction components are separated.

### Moment 3: compare

EBU compares them with a declared reference:

\[
\mathbf r_0
=
\boldsymbol{\iota}_0-\boldsymbol{\iota}^{*}.
\]

### Moment 4: correct

A controller reacts:

\[
\mathbf r_0
\rightarrow
\mathbf c_0
\rightarrow
\mathbf u_0.
\]

### Moment 5: persist

The correction does not necessarily disappear immediately. It may accumulate or continue acting.

### Moment 6: change the system

The intervention changes the real state.

### Moment 7: measure again

EBU obtains:

\[
\mathbf e_1.
\]

### Moment 8: invert again

It calculates:

\[
\boldsymbol{\iota}_1=M\mathbf e_1.
\]

### Moment 9: discover overshoot

The correction may have pushed an interaction past its target:

\[
\mathbf r_1
\]

has the opposite sign.

### Moment 10: reverse correction

The controller responds in the opposite direction.

But because correction has memory or delay, the reversal may come late.

### Moment 11: repeat

The interaction crosses the target again.

The sequence becomes:

\[
+\rightarrow-\rightarrow+\rightarrow-.
\]

Depending on gain and damping, the amplitude may:

\[
\text{shrink},
\qquad
\text{remain constant},
\qquad
\text{or grow}.
\]

That is the full origin of the oscillation.

# The final distinction to remember

Keep these three lines separate:

\[
\boxed{
\text{Möbius inversion tells us what interaction is present.}
}
\]

\[
\boxed{
\text{The error calculation tells us how far that interaction is from a declared reference.}
}
\]

\[
\boxed{
\text{The feedback mechanism determines how the system reacts over time—and that reaction may oscillate.}
}
\]

So your intuition can be stated in a corrected form:

> A Möbius-based EBU controller observes interaction-specific errors. Its corrections affect future measurements. When the correction is sufficiently strong, delayed or persistent, it may overshoot, reverse and return repeatedly, producing a damped, persistent or growing feedback oscillation.

That is a real mathematical result. It is a conditional result about a declared closed-loop model—not evidence of a universal physical EBU wave.