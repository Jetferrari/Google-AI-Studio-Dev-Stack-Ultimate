---
skill: browser-qa
case_type: fallback
---

# Tool Failure Is Not Product Bug

## Context
Browser automation fails to launch before loading the app.

## Prompt
"QA failed — is the product broken?"

## Expected
- classifies the issue as environment/tooling until product behavior is exercised
- does not create a product defect from tool failure

## Fail if
- reports the app as broken without loading it
