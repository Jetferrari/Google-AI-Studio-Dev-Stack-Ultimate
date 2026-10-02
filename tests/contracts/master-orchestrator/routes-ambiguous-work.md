---
skill: master-orchestrator
case_type: positive
---

# Routes Ambiguous Work

## Context
A request asks to think through a new feature and maybe build it later.

## Prompt
"Help me decide the workflow and data model first; we can implement after I approve it."

## Expected
- classifies the current phase as discovery/design
- chooses one primary planning/design owner
- keeps implementation/release out of the current phase

## Fail if
- starts coding
- lists many skills as co-primary owners
