# Portability Checklist

Search the skill and supporting files for assumptions about:

- bash/zsh/PowerShell syntax;
- `/tmp`, home directories, drive letters;
- `python` vs `python3`;
- npm/pnpm/yarn/bun;
- `gh`, `glab`, issue trackers;
- browser/Playwright/DevTools tool names;
- MCP server/tool names;
- `invoke_subagent` or equivalent;
- filesystem writes outside workspace;
- internet/web fetch;
- environment variables/credentials;
- commit/push/deploy behavior.

For every assumption choose: remove, detect, make conditional, or provide fallback.
