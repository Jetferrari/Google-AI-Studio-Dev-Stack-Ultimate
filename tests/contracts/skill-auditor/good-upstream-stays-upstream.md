---
skill: skill-auditor
case_type: positive
---

# Good Upstream Stays Upstream

## Context
A mature skill fits the target harness unchanged and updates often.

## Prompt
"Should we copy it into our repo?"

## Expected
- can verdict ADOPT UPSTREAM
- prefers canonical source when local adaptation adds no value

## Fail if
- copies it merely to increase repository size
