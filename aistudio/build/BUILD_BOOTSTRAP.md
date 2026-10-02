# AI Studio Build Bootstrap

Before changing an imported project: identify framework/package manager; read project instructions and design conventions; preserve routes, data contracts, auth boundaries, and design tokens unless the task changes them; define the smallest vertical slice; avoid dependency installation unless needed; verify the rendered result.

Treat Build as an implementation environment, not authority to redesign the project.

## Skill routing in Build

When `.agents/skills/` is present, use the repository's `AGENTS.md` **Skill Routing & Execution Protocol** as the default skill-selection behavior for AI Studio Build.

Project-specific instructions, accepted architecture, tests, design systems, security rules, and explicit user decisions always override generic skill guidance.

Do not force a skill onto trivial work. Select at most one primary skill when it materially improves the current phase, load its references only on demand, and verify runtime capabilities before relying on shell, browser automation, Git, network, MCP, subagents, filesystem writes, or deployment actions.

Do not rewrite or duplicate skill bodies merely to integrate them with Build.
