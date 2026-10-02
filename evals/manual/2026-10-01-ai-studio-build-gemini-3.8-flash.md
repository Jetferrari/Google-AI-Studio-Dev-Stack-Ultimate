# Manual Level D Eval — Google AI Studio Build / Gemini 3.8 Flash

- Model ID shown in UI: **Gemini 3.8 Flash**
- Date: **2026-10-01 (user-local)**
- Harness/UI: **Google AI Studio Build**
- Repository imported: `Jetferrari/Google-AI-Studio-Dev-Stack-Ultimate`
- Skill baseline: first-party skill bodies from repository release `v1.0.0-ultimate`
- Routing integration: workspace `AGENTS.md` + `aistudio/build/BUILD_BOOTSTRAP.md`; all 12 owned skill bodies remained unchanged during the run
- Evaluator method: manual comparison of observed model behavior against skill boundaries and contract expectations, with repository source verification
- Tool context observed during the run: shell available; Git binary present but workspace was not a Git checkout; browser automation, generic subagents and MCP were not exposed; some network/search capability remained separately scoped

## Scope

This run evaluates **four routing/execution scenarios**. It is Level D evidence only for the exact model label, AI Studio Build harness, workspace state and date above.

It does **not** claim that all 12 skills or all 54 contract fixtures have passed Level D. The 54-fixture suite is deterministic Level C specification coverage unless each fixture is executed against a real model/harness.

## Results

| Scenario | Expected behavior | Observed behavior | Result |
|---|---|---|---|
| Open visual direction for a new analytics landing page | Route to `frontend-director`; remain in design; no implementation; use references only as needed | Model selected Design + `frontend-director`, loaded targeted references, produced three direction forks with thesis/signature/trade-off, and stopped for user selection | **PASS** |
| Localized button-copy change | Use no skill when project authority is sufficient; do not invent target files | Model selected no skill, searched for the literal string, found no occurrence, made no changes, and asked for target clarification | **PASS** |
| Capability audit for shell/Git/browser/MCP/subagents | Route to `environment-audit`; distinguish CONFIRMED/ABSENT/BLOCKED/UNKNOWN; do not mutate environment | Model selected `environment-audit`, produced an evidence matrix, classified Git as BLOCKED rather than absent, did not infer generic subagents/MCP/browser, and provided fallbacks | **PASS** |
| Small reversible UI interaction experiment | Route to `vibe-mode`; define minimum vertical slice; avoid production complexity; stop when demonstrable | Model selected Prototype + `vibe-mode`, reused existing client data/UI, added a reversible Quick Skill Lookup, installed no new feature infrastructure, and stopped at KEEP decision | **PASS** |

## Observed routing pass rate

**4 / 4 scenarios passed (100%)** for this recorded run.

That percentage is intentionally narrow: it describes only these four scenarios. It must not be generalized to untested skills, other prompts, future model aliases, other harnesses, or future repository revisions.

## Evidence notes

### 1. Frontend Director

The model correctly cited the repository routing map signal `visual direction is open → frontend-director`. It followed the skill's underdetermined-brief branch by producing 2–3 structurally different direction concepts and did not implement code before direction selection.

### 2. No-skill boundary

The model applied the repository rule that a task may use **no skill** when a skill does not materially improve it. It also respected the user's no-other-change constraint after the requested text target was not found.

### 3. Environment Audit

The model followed the skill's exact state vocabulary:

- `CONFIRMED` for directly evidenced shell/runtime;
- `BLOCKED` for Git capability whose binary existed but whose repository context was absent;
- `ABSENT` for capabilities not exposed by the active harness where direct evidence supported absence;
- `UNKNOWN` for credentials/network properties not safely probed.

It preserved the rule that a specialized or mentioned capability does not imply a generic one.

### 4. Vibe Mode

The model defined the bet and minimum working slice before implementation, reused the existing in-memory skill data and page, avoided auth/database/new production architecture, recorded deliberate roughness, and stopped once the interaction was demonstrable.

The rendered portal visibly showed the reversible `Quick Skill Lookup` experiment and successful lookup of `frontend-director`.

## Deterministic validation observed alongside the run

The workspace reported that `npm test` remained green with:

- 12/12 owned skill structural checks;
- 54 contract specifications present/passing deterministic coverage checks;
- 6/6 repository script tests.

These results support Levels A–C and regression safety. They are **not** counted as additional Level D cases.

## Follow-up

Future Level D runs should expand coverage to the remaining owned skills and negative/adverse cases, ideally using fresh sessions where context contamination could influence routing.
