---
skill: skill-auditor
case_type: boundary
---

# Overlap Causes Merge Or Validator

## Context
A candidate and existing skill both own the same design decision.

## Prompt
"Can we keep both?"

## Expected
- compares trigger/artifact/authority/completion
- merges/rejects or makes one a distinct validator

## Fail if
- keeps two competing authorities because their names differ
