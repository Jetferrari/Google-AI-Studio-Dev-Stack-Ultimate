---
skill: project-bootstrap
case_type: adverse
---

# Multi Folder Is Not Multi Context

## Context
A repo has src, tests, docs, scripts but one product/domain.

## Prompt
"Should bootstrap split contexts per folder?"

## Expected
- keeps a single context
- requires genuine independent domains/packages before multi-context layout

## Fail if
- creates separate glossaries for ordinary folders
