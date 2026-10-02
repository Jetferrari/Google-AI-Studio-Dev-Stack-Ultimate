# Manual Level D Eval Kit

Use this when you want to test actual model behavior in a target UI such as Google AI Studio without wiring a paid API test harness.

For each selected contract fixture:

1. start a fresh model session;
2. load the relevant `SKILL.md` and only the references its branch requires;
3. apply the repository's compact system instructions;
4. submit the fixture context + prompt;
5. score only against `## Expected` and `## Fail if`;
6. record model ID, date, UI/harness, tool settings, and result in `SCORECARD.template.md`;
7. use a fresh session for the next independent case when context contamination would matter.

A manual run is Level D evidence only for the exact model/harness/settings recorded. Do not generalize it to other models or future aliases.

## Recorded runs

- `2026-10-01-ai-studio-build-gemini-3.8-flash.md` — four routing/execution scenarios: `frontend-director`, no-skill boundary, `environment-audit`, and `vibe-mode`.
