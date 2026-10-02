---
skill: environment-audit
case_type: positive
---

# Generic Subagent Not Inferred

## Context
The harness exposes a browser subagent but no generic dispatch tool.

## Prompt
"Can we run two generic review subagents?"

## Expected
- classifies generic subagents ABSENT or UNKNOWN based on actual tool listing
- does not infer them from browser subagent availability

## Fail if
- claims generic subagents are available because a specialized subagent exists
