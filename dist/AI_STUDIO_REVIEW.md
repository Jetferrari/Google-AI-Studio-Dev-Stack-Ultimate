Work in explicit phases. Project authority outranks generic guidance.

For each task: identify the phase; inspect relevant context; choose one primary working mode; prefer small reversible changes; validate narrowly; do not advance into review/release unless requested or the implementation phase is complete.

Do not invent requirements or capabilities. Separate current defects from optional future improvements. Use current web sources for changing technical facts. Do not install dependencies, commit, deploy, migrate destructively, or alter production infrastructure without explicit approval.

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

---

# Ship Gate

A ship gate converts “looks done” into **evidence by risk**.

## Use when

- implementation is complete enough to claim success;
- a handoff should carry verified state;
- the user asks whether a change is ready to merge/release/deploy;
- a previous agent's completion claim needs verification.

## Skip when

- the work is still planning/prototyping;
- debugging has not established a fix yet;
- the user only wants an intermediate implementation step.

## 1. Fix the acceptance surface

Identify:

- requested behavior/acceptance criteria;
- changed files or equivalent mutation surface;
- explicitly out-of-scope behavior;
- any high-risk boundary touched.

When Git is available, inspect the actual diff/fixed point rather than relying on a conversational summary. Without Git, use the best available file/change evidence and say so.

**Complete when:** every validation step can be tied to the bounded change.

## 2. Classify validation depth

Use `references/risk-matrix.md` to choose **LOW**, **MEDIUM**, or **HIGH** evidence depth.

Risk increases with security/auth, money, destructive data, migrations, public contracts, concurrency, infrastructure, broad blast radius, or poor rollback.

Do not use a full release ceremony for a typo. Do not use a focused unit test as sole evidence for a high-risk cross-system change.

**Complete when:** the validation plan is proportionate and every omitted class of check has a reason.

## 3. Run the configured ladder

Use only checks that exist and apply:

1. static/type analysis;
2. lint/format policy;
3. focused tests at changed seams;
4. broader regression tests when risk/surface warrants;
5. production build/package validation when configured and relevant;
6. runtime/browser/integration validation for user-visible or system-boundary behavior;
7. repository hygiene: temp/debug artifacts, unintended files, generated drift.

Record each as:

- **PASS** — executed and passed;
- **FAIL** — executed and failed;
- **NOT APPLICABLE** — the project/task does not have that check;
- **NOT VERIFIED** — relevant but unavailable/not run.

A missing linter is NOT APPLICABLE unless the project says lint is required. A relevant browser path with no browser access is NOT VERIFIED, not PASS.

**Complete when:** every relevant acceptance criterion has at least one observed evidence path or an explicit NOT VERIFIED gap.

## 4. Reconcile failures

A gate failure is evidence, not permission to change requirements. Route failures to the correct owner:

- product/spec mismatch → implementation/design;
- failing unknown bug → debugging;
- visual/runtime defect → browser QA / implementation;
- environment/tool failure → environment audit.

Re-run only the affected checks after a fix, then the broader checks required by risk.

## 5. Inspect final state

Before a readiness claim, confirm:

- intended files only;
- no temp diagnostics/secrets;
- no unrequested commit/push/deploy;
- acceptance criteria still match what was built.

## Output

### Scope

### Risk depth
LOW / MEDIUM / HIGH — reason

### Evidence
| Check | Status | Evidence |
|---|---|---|

### Blockers

### Residual risk / NOT VERIFIED

### Conclusion
One of:
- acceptance criteria satisfied for the bounded scope;
- not ready: blockers remain;
- implementation appears complete but relevant validation is not verified.

## Boundaries

Ship Gate validates and reports. It does not silently install tooling, alter tests to force green, commit, push, merge, deploy, or perform migrations.
