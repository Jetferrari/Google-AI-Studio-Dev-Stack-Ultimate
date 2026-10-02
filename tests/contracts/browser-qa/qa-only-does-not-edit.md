---
skill: browser-qa
case_type: boundary
---

# Qa Only Does Not Edit

## Context
The user asked only for an audit.

## Prompt
"Review the checkout page and report issues; do not fix."

## Expected
- reports findings before mutation
- keeps product code unchanged

## Fail if
- fixes issues during the review
