---
name: browser-qa
description: Validate web behavior in a real browser/runtime when code-level checks cannot prove rendering, interactions, responsive layout, console/network health, focus behavior, or user-visible states. Use after implementation, a UI fix, or before a visual completion claim.
origin: OWN
license: MIT
---

# Browser QA

Browser QA tests the **rendered truth**, not what the code appears likely to do.

## Use when

- a change affects a web route/component users interact with;
- responsive layout or overflow matters;
- runtime console/network behavior matters;
- a visual fix needs verification;
- a test suite cannot prove the user-visible result.

## Skip when

- there is no browser surface;
- the task is pure visual direction before implementation;
- the bug is not reproducible and requires a deeper debugging workflow first.

## 1. Write the QA charter

Define:

- route/surface;
- target state/data;
- primary interaction(s);
- relevant viewports;
- explicit acceptance criteria.

Use the smallest charter that can falsify the completion claim. Read `references/qa-matrix.md` when the task spans several browser dimensions.

**Complete when:** every browser action maps to an acceptance criterion or a known risk.

## 2. Confirm runtime and environment health

Load the surface and separate **tool/environment failures** from product behavior.

Observe as applicable:

- page load/navigation;
- console errors/exceptions;
- failed or unexpected network requests;
- missing assets/hydration/runtime errors.

Redact tokens, auth headers, cookies, and private payloads from reported evidence.

If browser automation itself fails before the product is exercised, classify the result as an environment/tooling block. Do not convert it into a product defect.

**Complete when:** the application is genuinely under test or the tooling block is proven.

## 3. Exercise the user path

Drive the exact changed behavior. Assert outcomes against DOM/state/URL/network evidence where possible, not screenshots alone.

For keyboard-accessible interactions, verify focus can reach the control and the state change is operable without a pointer when that control is expected to support keyboard use.

**Complete when:** the primary path has an observed pass/fail outcome.

## 4. Inspect responsive/layout behavior

For relevant viewports check:

- unintended horizontal overflow;
- clipping/overlap;
- text wrapping/truncation;
- sticky/fixed elements;
- touch target collisions;
- intended collapse/reorder/scroll behavior.

Prefer measurable claims such as `scrollWidth <= innerWidth` over “looks fine.”

Do not test arbitrary breakpoint counts. Use the project's target widths plus widths around the layout transition that the change affects.

## 5. Inspect visible states

Only for states in scope, verify:

- loading;
- empty;
- error;
- success;
- disabled;
- selected/active;
- focus-visible;
- reduced-motion behavior when motion changed.

## 6. Report before fixing in QA-only mode

If the user asked for QA/review, report defects without editing code. If they asked for fix-and-verify, hand findings to implementation/debugging, then rerun the affected charter.

Use severity definitions in `references/severity.md`. Severity follows user impact and reproducibility, not how dramatic the screenshot looks.

## Output

For each finding:

- **Severity**
- **Surface / viewport / state**
- **Reproduction**
- **Observed evidence**
- **Expected behavior**
- **Likely area** — only when supported; avoid speculative root-cause claims

Finish with:

- paths verified;
- paths NOT VERIFIED;
- environment/tooling failures separated from product defects.

## Boundaries

Browser QA does not silently change product code, weaken assertions, expose authenticated payloads, or claim accessibility conformance from a superficial pass. It validates the charter actually exercised.
