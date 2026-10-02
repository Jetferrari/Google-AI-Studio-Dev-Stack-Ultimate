# Reference Benchmark

The first-party skill redesign used the following public material as a **quality benchmark**, not as text to copy.

## Benchmark source

Repository: <https://github.com/mattpocock/skills>

Pinned revision reviewed: `d81f3a183412e71a5b1e84ca21bc1a35eea03a60`

Files directly reviewed for this redesign included:

- `skills/productivity/writing-for-agents/SKILL.md`
- `skills/productivity/writing-for-agents/SKILL-MECHANICS.md`
- `skills/engineering/diagnosing-bugs/SKILL.md`
- `skills/engineering/setup-matt-pocock-skills/SKILL.md`
- `skills/engineering/prototype/UI.md`
- `skills/engineering/code-review/SKILL.md`
- `skills/productivity/handoff/SKILL.md`

## Quality characteristics adopted as a benchmark

The redesign specifically checked for these characteristics visible in that public work:

1. **Invocation precision** — the skill's description acts as a real routing interface.
2. **Progressive disclosure** — branch-specific reference is moved out of the main path when that makes the procedure clearer.
3. **Observable completion** — important phases stop on evidence, not “seems understood.”
4. **Failure-mode focus** — a skill exists to change behavior around a concrete failure, not to create another persona.
5. **Composability** — neighboring workflows have ownership boundaries instead of all trying to run at once.
6. **High-signal prose** — avoid no-op instructions, stale caches of environment facts, and repeated rules.
7. **Branch-aware procedures** — different task shapes get explicit handling rather than one vague checklist.
8. **Human agency at real decisions** — automation does not silently choose consequential product/architecture decisions.

## What is original here

The 12 skills under `.agents/skills/` are marked `origin: OWN` and were written for this repository's workflow model. In particular, `frontend-director` is original and is not a derivative copy of a third-party frontend-design skill.

The benchmark does not imply endorsement, affiliation, or a claim that deterministic repository checks prove equal real-world model performance. That requires behavioral evaluation in the target harness.
