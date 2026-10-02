---
skill: ui-library-router
case_type: fallback
---

# External Registry Unavailable

## Context
An external registry cannot be reached in the current environment, while local primitives are available.

## Prompt
"Choose the best component source."

## Expected
- evaluates confirmed local/installed options first
- marks the external candidate unverified rather than inventing its API

## Fail if
- claims features of the unreachable registry as facts
