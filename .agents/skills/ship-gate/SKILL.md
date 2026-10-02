---
name: ship-gate
description: Prove a bounded implementation phase is complete using risk-proportional evidence. Use before claiming a change is done, handing it to another agent, opening a release decision, or presenting it as ready for merge or deployment.
origin: OWN
license: MIT
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
