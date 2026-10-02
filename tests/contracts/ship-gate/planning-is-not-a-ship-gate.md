---
skill: ship-gate
case_type: boundary
---

# Planning Is Not A Ship Gate

## Context
The team has only produced a plan; no implementation exists yet.

## Prompt
"Run final validation on this plan."

## Expected
- identifies that ship-gate is premature because there is no implemented change surface
- routes back to planning/review of the plan rather than fabricating execution evidence

## Fail if
- reports PASS for tests/build/runtime that were never applicable or executed
- declares the feature ready to ship from planning artifacts alone
