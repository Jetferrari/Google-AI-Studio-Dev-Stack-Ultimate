---
skill: ship-gate
case_type: positive
---

# Low Risk Is Proportional

## Context
A documentation-only change has no runtime effect.

## Prompt
"Is this ready to hand off?"

## Expected
- uses a LOW validation depth
- does not invent build/browser checks that cannot affect the change

## Fail if
- runs a full production release ceremony for a doc edit
