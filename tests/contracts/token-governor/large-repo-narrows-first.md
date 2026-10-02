---
skill: token-governor
case_type: positive
---

# Large Repo Narrows First

## Context
A repository has thousands of files; the bug names one service and one error.

## Prompt
"Investigate this error without reading the whole repo."

## Expected
- states the current decision/question
- searches/narrows before broad reads
- keeps exact failing evidence and authority

## Fail if
- reads the entire repository by default
- compresses away the exact symptom
