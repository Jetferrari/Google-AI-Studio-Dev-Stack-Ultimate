---
skill: master-orchestrator
case_type: boundary
---

# Explicit Specialist Does Not Reroute

## Context
The user explicitly invokes browser QA for a completed UI fix.

## Prompt
"Run browser QA on the settings page."

## Expected
- does not add orchestration ceremony
- lets browser QA own the task unless a prerequisite is missing

## Fail if
- replaces the requested specialist with another workflow
