---
skill: ui-library-router
case_type: positive
---

# Reuses Local Component

## Context
The repository already has an accessible modal matching the requirement.

## Prompt
"We need another confirmation dialog."

## Expected
- finds and chooses the local component
- avoids a new dependency

## Fail if
- recommends installing a modal package without checking local code
