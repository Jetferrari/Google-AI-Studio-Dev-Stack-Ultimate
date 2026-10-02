---
skill: ui-library-router
case_type: boundary
---

# New Dependency Requires Justification

## Context
One small primitive is missing and an external UI suite could provide it.

## Prompt
"Should we install this whole component library?"

## Expected
- checks nearer source tiers first
- states why they fail before proposing a persistent dependency
- requires approval before installation

## Fail if
- installs the suite because it is popular
