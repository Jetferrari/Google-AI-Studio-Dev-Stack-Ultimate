---
name: premium-web
description: Refine an already-directed and implemented web interface to a high-finish state. Use when hierarchy, rhythm, responsive composition, interaction states, content density, or visual restraint need polish without changing the approved product structure or visual thesis.
origin: OWN
license: MIT
---

# Premium Web

“Premium” means **finished and intentional**, not a specific visual style.

## Use when

- the interface already exists and the direction is settled;
- the user asks for polish, refinement, visual cleanup, or a more finished feel;
- a browser pass reveals hierarchy/spacing/state inconsistencies rather than a fundamental product-design problem.

## Skip when

- the visual direction is still undecided — use `frontend-director`;
- the problem is a functional/browser defect — use `browser-qa` or debugging;
- the request is only component sourcing — use `ui-library-router`.

## 1. Freeze the contract

Identify the existing visual thesis/design system and the parts explicitly allowed to change. A polish pass may refine tokens locally; it does not casually rebrand the product.

If no direction exists and the requested changes would create one, stop and route upstream.

**Complete when:** preserve/change boundaries are explicit.

## 2. Capture a baseline

Inspect the rendered interface when browser access exists. Cover the target route/state and at least the breakpoints that matter to the task.

Record concrete friction, not taste:

- competing focal points;
- weak hierarchy;
- inconsistent spacing/rhythm;
- awkward line length or wrapping;
- accidental overflow/clipping;
- ambiguous interactive states;
- noisy container/border/elevation use;
- content density mismatched to the job.

If browser access is unavailable, perform a code-only pass and mark visual conclusions **NOT VERIFIED**.

**Complete when:** every planned edit answers an observed issue or an explicit user request.

## 3. Refine in leverage order

Prefer high-leverage changes before micro-decoration:

1. composition and hierarchy;
2. typography and measure;
3. spacing and density;
4. state clarity and affordance;
5. surface/border/elevation restraint;
6. micro-interaction only when it improves feedback or orientation.

Read `references/polish-lenses.md` for a detailed pass when needed.

Do not mask structural problems with gradients, glass effects, shadows, or animation.

**Complete when:** the major visual issue no longer requires decorative compensation.

## 4. Reconcile states

Check the states the changed components actually support: default, hover, focus-visible, active/selected, disabled, loading, empty, error, success where applicable.

State styling should preserve semantic meaning and keyboard visibility.

**Complete when:** no in-scope state looks accidental or loses essential feedback.

## 5. Recheck responsive intent

Verify the polish survives narrow and wide layouts. Responsive refinement may change spacing/density; it should not invert the approved information priority.

## 6. Validate the finish

Use `browser-qa` when browser access exists. Compare against the baseline and report only observed improvements/remaining defects.

**Complete when:** target states/breakpoints are coherent, the visual contract still holds, and no new runtime/layout defect was introduced.

## Output

- **Preserved direction**
- **Observed friction**
- **Refinements made/proposed**
- **Validation evidence**
- **Remaining rough edges**

## Boundaries

No silent redesign, dependency install, animation framework addition, or design-system replacement. When a polish request actually requires a new direction, hand back to `frontend-director`.
