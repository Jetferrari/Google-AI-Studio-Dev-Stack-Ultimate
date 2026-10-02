# Efficiency Report

Generated from repository text and deterministic counts. Token figures are **approximate** (characters / 4), not a model tokenizer.

## Context profile

- Owned skills: **12**
- Main skill words: **6783**
- Supporting reference words: **1932**
- Average main skill size: **565 words**
- Reference material kept behind progressive disclosure: **22%** of skill+reference words
- Approximate total always-on description cost if a harness globally loads all descriptions: **806 tokens**
- Contract specifications: **54**

## Per-skill profile

| Skill | Main words | Ref words | Ref files | Contracts | Approx description tokens |
|---|---:|---:|---:|---:|---:|
| browser-qa | 549 | 168 | 2 | 4 | 66 |
| environment-audit | 498 | 168 | 1 | 4 | 72 |
| frontend-director | 924 | 238 | 5 | 5 | 73 |
| master-orchestrator | 621 | 122 | 1 | 4 | 68 |
| premium-web | 503 | 108 | 1 | 4 | 67 |
| project-bootstrap | 480 | 139 | 2 | 5 | 68 |
| public-repo-gate | 578 | 186 | 2 | 5 | 75 |
| ship-gate | 570 | 102 | 1 | 5 | 57 |
| skill-auditor | 571 | 248 | 2 | 5 | 76 |
| token-governor | 460 | 133 | 2 | 4 | 57 |
| ui-library-router | 453 | 161 | 2 | 5 | 63 |
| vibe-mode | 576 | 159 | 2 | 4 | 64 |

## Interpretation

- The always-on cost is intentionally concentrated in short routing descriptions; full procedures load only when invoked in skill-aware harnesses.
- Reference-heavy branches are disclosed into separate files so ordinary invocations do not need every edge-case rule at once.
- Contract count measures specification coverage, **not behavioral pass rate**. Real model compliance requires Level D evals described in `docs/skills/EVAL_STANDARD.md`.
- “Efficiency” here means context/structure efficiency and deterministic repository quality; it is not a benchmark of model speed, cost, or coding accuracy.
