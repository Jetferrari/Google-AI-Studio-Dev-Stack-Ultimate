---
name: frontend-director
description: Establish a concrete visual contract before frontend implementation. Use for a new surface, redesign, or visually underdetermined interface when typography, composition, hierarchy, responsive behavior, visual identity, or interaction posture would otherwise be invented ad hoc while coding.
origin: OWN
license: MIT
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
