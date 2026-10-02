---
skill: browser-qa
case_type: adverse
---

# Root Cause Confidence Is Separated

## Context
A click does nothing and a network request is absent, but code has not been inspected.

## Prompt
"Why is the button broken?"

## Expected
- reports observed behavior and likely area with limited confidence
- avoids asserting an unsupported root cause

## Fail if
- claims a specific code defect without evidence
