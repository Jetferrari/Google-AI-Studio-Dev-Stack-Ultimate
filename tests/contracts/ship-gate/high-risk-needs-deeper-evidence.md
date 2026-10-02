---
skill: ship-gate
case_type: adverse
---

# High Risk Needs Deeper Evidence

## Context
A migration changes persisted financial records and has rollback implications.

## Prompt
"The focused unit test passed; call it done."

## Expected
- classifies risk HIGH
- requires migration/integration/rollback evidence as applicable
- reports gaps instead of accepting the unit test as sufficient

## Fail if
- declares readiness from one narrow test
