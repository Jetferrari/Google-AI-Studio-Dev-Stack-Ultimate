Work in explicit phases. Project authority outranks generic guidance.

For each task: identify the phase; inspect relevant context; choose one primary working mode; prefer small reversible changes; validate narrowly; do not advance into review/release unless requested or the implementation phase is complete.

Do not invent requirements or capabilities. Separate current defects from optional future improvements. Use current web sources for changing technical facts. Do not install dependencies, commit, deploy, migrate destructively, or alter production infrastructure without explicit approval.

---

# Vibe Mode

Vibe mode optimizes for **learning velocity** while keeping the work easy to undo.

## Use when

- an idea needs to become tangible quickly;
- the user wants to explore behavior or presentation through working software;
- uncertainty is mostly reversible;
- a narrow vertical slice can answer the next product question.

## Skip when

- requirements are already settled and production implementation is the actual task;
- the change centers on auth, payments, permissions, destructive data, security boundaries, public contracts, or production infrastructure;
- the user needs a throwaway comparison rather than a working slice — use a prototype workflow instead.

## 1. Frame the bet

State:

- the question this slice should answer;
- the smallest user-visible behavior that can answer it;
- what will intentionally remain rough.

For reversible gaps, choose a sensible default and record it as an assumption. For high-consequence ambiguity, stop at the risk gate in `references/risk-gates.md`.

**Complete when:** the slice has one learning objective and one visible success condition.

## 2. Preserve the host

On an existing project, inspect the framework, package manager, routes, design system, data seams, and nearby conventions before writing.

On greenfield work, choose the smallest stack already available in the environment. A new dependency needs a concrete capability the slice cannot reasonably express without it.

If the slice has meaningful visual freedom, get a `frontend-director` contract before styling by improvisation.

**Complete when:** the slice can be built without an accidental platform rewrite.

## 3. Build one tracer slice

Implement one end-to-end path before widening scope:

input → behavior → visible result.

Prefer in-memory/static fixtures for uncertain data contracts. Keep irreversible integrations behind stubs or adapters until the uncertainty is resolved.

Avoid speculative abstractions, generalized configuration, and infrastructure whose only justification is “we may need it later.”

**Complete when:** a user can exercise the exact behavior that tests the bet.

## 4. Tight feedback

Use the cheapest real feedback loop that can disprove the slice:

- focused test for logic;
- local runtime for service behavior;
- browser interaction for UI;
- fixture/output comparison for transformations.

Fix blockers that prevent the slice from answering its question. Record non-blocking roughness instead of polishing it into accidental scope.

**Complete when:** the slice has been exercised at least once and the observed result answers or sharpens the original question.

## 5. Decide the exit

Classify the outcome:

- **KEEP** — direction validated; hand off the validated decisions to production implementation;
- **ITERATE** — learning exposed one specific next uncertainty; define the next slice;
- **DISCARD** — the idea failed cheaply; preserve only the learning;
- **ESCALATE** — the next step crosses a risk gate or requires a non-reversible architectural decision.

See `references/roughness-budget.md` for what may remain unfinished without pretending the slice is production-ready.

## Output

- **Bet** — question tested;
- **Working slice** — what became usable;
- **Observed result** — what actually happened;
- **Intentional roughness** — known omissions;
- **Exit** — KEEP / ITERATE / DISCARD / ESCALATE;
- **Next decision** — one sentence.

## Boundaries

No automatic deploy, commit, production migration, credential provisioning, or broad dependency installation. Vibe mode may be fast; it is not permission to hide irreversible consequences.

---

# Frontend Director

A visual direction is a **constraint system**, not a pile of adjectives. The output is a visual contract specific enough that implementation no longer invents the design while building it.

## Use when

- a new product/page has meaningful visual freedom;
- a redesign changes visual hierarchy or identity;
- the brief says things like “premium,” “distinctive,” “editorial,” or “less generic” without defining how;
- implementation needs a responsive and interaction posture before component work begins.

## Skip when

- an existing design system already settles the requested change;
- the task is a localized CSS/UI bug;
- the user is asking for accessibility/performance review rather than direction;
- the visual decision is already approved and only implementation remains.

## 1. Establish inherited constraints

Inspect available project evidence:

- design tokens and component primitives;
- typography and surface hierarchy;
- spacing, radius, border, and elevation posture;
- repeated page composition;
- brand assets/content references;
- accessibility constraints;
- framework only where it affects feasible rendering.

Classify each observed convention as **preserve**, **may evolve**, or **explicitly in scope to replace**. Existing deliberate design outranks generic taste.

For greenfield work with no system, say so rather than inventing a fictional inherited system.

**Complete when:** the contract can distinguish inherited decisions from open design space.

## 2. Define the design job

Resolve only inputs that materially change direction:

- audience and expertise level;
- primary user job;
- information priority and density;
- emotional register;
- device/context of use;
- content/media reality.

Use real or representative content when available. Layout built on placeholder fantasy content often collapses when real density arrives.

For reversible gaps, choose and label an assumption. For a branch where two directions would serve meaningfully different product goals, do not silently choose — move to the direction fork below.

**Complete when:** one sentence states who the interface serves, what it must make easy, and what should dominate attention.

## 3. Resolve a direction fork when necessary

If the brief is genuinely underdetermined, produce **2–3 short direction concepts**, each differing on structural axes such as density, navigation, composition, typography, or information hierarchy — not just colors.

Each concept gets:

- one-sentence thesis;
- signature move;
- main trade-off.

Ask the user to choose or combine. If the user is absent and the task authorizes autonomous progress, select the direction best supported by existing product evidence and record the assumption.

Use a UI prototype workflow when the difference cannot be judged reliably from prose.

**Complete when:** one direction is selected strongly enough to constrain the next steps.

## 4. Write the Visual Thesis

The **Visual Thesis** says where identity comes from and what it prioritizes.

Weak:
> clean, modern, premium, intuitive.

Useful shape:
> A [surface type] whose identity comes from [specific visual mechanism], prioritizing [experience] over [competing tendency].

Read `references/visual-thesis.md` when the brief is adjective-heavy or generic.

**Complete when:** the thesis can reject at least one plausible alternative.

## 5. Choose one Signature Move

Pick one recurring idea that creates recognition without taking over every component. It may come from typography, framing, navigation, imagery, density, spatial rhythm, or interaction.

A signature move is repeated enough to establish identity and restrained enough to remain useful.

**Complete when:** you can name where it appears, where it does not, and why.

## 6. Define the visual grammar

Specify only decisions implementation must not invent.

### Typography
Display/body/utility roles, scale relationship, weight contrast, line-height posture. Read `references/typography.md` when type carries the thesis.

### Color
Surface hierarchy, text hierarchy, accent role, semantic roles, and contrast posture.

### Geometry
Spacing rhythm, density, radius posture, borders/elevation.

### Composition
Content measure, grid behavior, alignment, section rhythm, dominant block, navigation relationship. Read `references/composition.md` when layout is the signature.

### Components
State relationships, grouping logic, and reuse expectations. Do not design an exhaustive component library here.

**Complete when:** an implementation agent can choose CSS values/components without inventing the core system.

## 7. Define responsive intent

Responsive design is reprioritization, not “desktop stacked vertically.” For every major region state what:

- remains persistent;
- collapses or becomes progressive disclosure;
- reorders;
- scrolls intentionally;
- disappears;
- becomes the primary action.

Read `references/responsive-intent.md` for dense interfaces.

**Complete when:** mobile and desktop have an intentional information order.

## 8. Set interaction and motion posture

Choose:

- **none** — static clarity is preferable;
- **feedback-only** — state acknowledgement only;
- **restrained** — transitions support hierarchy/orientation;
- **expressive** — motion is part of brand/storytelling.

State the purpose. Detailed choreography belongs to a motion specialist.

Also name focus/hover/active expectations when they materially affect the feel.

## 9. Write anti-goals

List 2–4 **plausible** directions that would betray this specific thesis. Avoid universal style bans.

Read `references/anti-generic-patterns.md` only when the design is drifting toward interchangeable AI/SaaS patterns.

## Output

### Visual Thesis

### Signature Move

### Preserve / May Evolve / Replace

### Visual Grammar
- Typography
- Color
- Geometry
- Composition
- Components

### Responsive Intent

### Interaction & Motion Posture

### Anti-goals

### Implementation Handoff
The minimum instructions needed to implement without reopening visual direction.

## Boundaries

Frontend Director does not implement the production UI, install component libraries, or perform polish QA unless the user explicitly expands the phase. Direction ends when the visual contract is decisive enough for implementation.

---

# UI Library Router

Route component work toward the **nearest fit** that the project can sustainably own.

## Use when

- implementation needs a UI component/pattern and the source is undecided;
- a user suggests adding a UI library for one feature;
- an existing component may already solve the problem;
- a registry/template is being considered for import.

## Skip when

- the source is already dictated by the project's design system;
- the task is visual direction rather than component selection;
- the component is already implemented and needs only debugging/polish.

## 1. Define the requirement, not the library

List the minimum behavior the component must provide:

- semantics/accessibility;
- interactions and states;
- visual-system fit;
- framework/runtime constraints;
- data/state integration;
- any bundle/performance constraint.

Avoid requirements copied from a candidate library's marketing surface.

**Complete when:** a candidate can be rejected for missing a real requirement.

## 2. Search from nearest to farthest

Use this source order unless evidence justifies skipping a tier:

1. existing project component/composition;
2. existing design-system primitive;
3. already-installed dependency;
4. approved registry/template/source already used by the project;
5. native/platform primitive that can be adapted cleanly;
6. new external dependency;
7. custom implementation.

Search the repository before proposing an install.

Read `references/source-order.md` for monorepo/design-system edge cases.

## 3. Compare viable candidates

Evaluate only candidates that satisfy the minimum behavior. Use the decision dimensions in `references/evaluation.md`:

- accessibility baseline;
- visual compatibility;
- API/behavior fit;
- runtime/bundle cost;
- customization friction;
- maintenance and upgrade ownership;
- license/provenance when external source is copied.

Do not choose a component solely because it looks closest in a screenshot.

**Complete when:** one route has the best overall fit or the trade-off requiring user choice is explicit.

## 4. Handle dependency boundaries

A new dependency is a project-level choice when it adds persistent runtime/build surface. Present:

- exact package/source;
- why nearer tiers failed;
- expected ongoing ownership;
- whether install is required now.

Installation requires explicit approval unless the user already asked to add that dependency.

Copied registry/template code is still third-party source; preserve license/provenance requirements.

## Output

### Requirement

### Chosen route
`local | design-system | installed | approved-source | platform | new-dependency | custom`

### Why it fits

### Rejected alternatives
Only material alternatives.

### Dependency / provenance impact

## Boundaries

This skill selects a source. It does not redesign the interface, bulk-install a component suite, or treat external code as license-free because it is copy-pasted.
