# Probe Catalog

Prefer probes that do not mutate state.

| Capability | Strong evidence | Common false inference |
|---|---|---|
| shell/runtime | actual command/version succeeds | documentation says runtime is supported |
| filesystem write | controlled temp write/delete in allowed area | file read implies write |
| Git read | status/rev-parse succeeds | `.git` directory alone |
| Git remote write | authenticated dry capability/explicit connector permission | remote URL exists |
| browser automation | tool actually opens/navigates page | browser-related package/config exists |
| network | controlled fetch/search succeeds | DNS/tool exists |
| MCP | server/tool listing or invocation succeeds | `.mcp.json` exists |
| generic subagents | generic dispatch tool is listed/invoked | specialized browser subagent exists |
| skill availability | runtime lists/discovers skill | files exist in another harness |
| deployment | explicit permission/action path | CLI installed |

Never probe a high-consequence write/deploy merely to prove it exists. Mark permission UNKNOWN/BLOCKED unless safe evidence is available.
