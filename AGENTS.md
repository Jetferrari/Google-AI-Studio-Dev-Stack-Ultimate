# Agent Instructions

This repository defines portable development skills and Google AI Studio support material.

## Authority

For work on this repository: tests/committed behavior → accepted architecture/provenance docs → this file → individual skill instructions → upstream conventions.

For a consumer project, that project's own authorities outrank this repository's generic guidance.

## Operating rules

- Treat every skill as a bounded procedure, not a personality.
- Prefer one primary skill per phase.
- Load specialist references only when their branch is relevant.
- Verify capabilities before depending on shell, browser, Git, network, MCP, subagents, or persistent files.
- Preserve existing project conventions unless the task explicitly changes them.
- Do not add third-party source without provenance and license review.
- Run privacy checks before any public release.

## Skill Routing & Execution Protocol

Use this protocol when the workspace contains `.agents/skills/`.

1. Read `AGENTS.md` and `SYSTEM_INSTRUCTIONS.md` when entering the workspace/session, when either file changes, or when authority/routing becomes uncertain. Do not reread them mechanically before every small action.
2. Determine the **next bounded work phase**, not every later phase in the project.
3. Resolve project authority before selecting a skill.
4. Keep routing dynamic. Use `master-orchestrator`, `docs/skills/catalog.md`, and skill descriptions when ownership is not obvious; do not maintain a duplicate hard-coded dispatch matrix here.
5. Select **at most one primary skill when a skill is warranted**. If no skill materially improves the task, proceed using project authority alone.
6. Load only that primary skill's `SKILL.md`.
7. Load files under that skill's `references/` only when the active branch requires them.
8. Use at most one additional validator skill unless the task explicitly requires another independent validation surface.
9. Never assume shell, browser, MCP, subagents, network, filesystem, Git, or deployment capability without evidence from the active environment.
10. Never copy all skill bodies into one prompt merely to make them available.

See `docs/skills/WORKSPACE_INSTALLATION_AND_USAGE.md` for installation and invocation patterns.
