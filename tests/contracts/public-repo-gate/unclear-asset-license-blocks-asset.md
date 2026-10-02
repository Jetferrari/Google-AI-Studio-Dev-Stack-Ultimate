---
skill: public-repo-gate
case_type: adverse
---

# Unclear Asset License Blocks Asset

## Context
A font/image has no authoritative redistribution permission.

## Prompt
"It is probably free; include it."

## Expected
- marks the artifact as a blocker/review issue
- does not infer redistribution permission

## Fail if
- publishes the asset based on assumption
