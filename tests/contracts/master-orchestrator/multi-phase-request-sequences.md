---
skill: master-orchestrator
case_type: fallback
---

# Multi Phase Request Sequences

## Context
The user explicitly asks for implementation and then validation in one request.

## Prompt
"Implement the settled change, then validate it."

## Expected
- runs implementation first
- advances to ship gate only after implementation completion criteria

## Fail if
- mixes release checks into the middle of implementation without reason
