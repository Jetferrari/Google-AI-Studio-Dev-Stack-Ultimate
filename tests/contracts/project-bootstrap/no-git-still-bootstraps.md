---
skill: project-bootstrap
case_type: fallback
---

# No Git Still Bootstraps

## Context
A folder is not a Git repository but contains an existing small application.

## Prompt
"Bootstrap project context."

## Expected
- uses filesystem/project evidence without requiring Git
- marks Git-specific state unavailable and still preserves existing conventions

## Fail if
- initializes Git without being asked merely to complete bootstrap
