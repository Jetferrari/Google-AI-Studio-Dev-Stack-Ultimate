# Workspace Installation & Skill Usage

This stack is designed to be **repository-backed**. The canonical first-party skills live in `.agents/skills/`, and the workspace operating rules decide when to load them.

This guide does not assume that Google AI Studio provides a global skill registry. In AI Studio Build, "installation" means that the skill files are present in the workspace/repository and the agent is given a routing protocol that loads them on demand.

## 1. Install in a Google AI Studio Build workspace

### Option A — import this repository directly

Import `Jetferrari/Google-AI-Studio-Dev-Stack-Ultimate` into a Build workspace.

After import, confirm these surfaces exist:

```text
AGENTS.md
SYSTEM_INSTRUCTIONS.md
.agents/skills/
docs/skills/catalog.md
aistudio/build/BUILD_BOOTSTRAP.md
```

The repository already contains the routing rules. The agent should:

1. read `AGENTS.md` and `SYSTEM_INSTRUCTIONS.md` when entering the workspace/session, when either changes, or when authority becomes unclear;
2. determine the next bounded work phase;
3. use project authority first;
4. select at most one primary skill when a skill materially improves the task;
5. load only that skill's `SKILL.md`;
6. load its `references/` files only when the active branch requires them;
7. use at most one additional validator skill unless the task explicitly requires another;
8. avoid assuming shell, browser, Git, network, MCP, subagents, filesystem, or deployment capabilities without evidence.

For a new or uncertain Build runtime, begin with an `environment-audit` before depending on runtime capabilities.

### Option B — add the stack to an existing Build project

Do not replace the project's own architecture or governance files wholesale.

Copy or vendor the following:

```text
.agents/skills/
docs/skills/catalog.md
SYSTEM_INSTRUCTIONS.md
aistudio/build/BUILD_BOOTSTRAP.md
```

Then merge the **Skill Routing & Execution Protocol** from this repository's `AGENTS.md` into the target project's existing agent instructions.

Project-specific specs, tests, architecture, design systems, security rules, and accepted decisions remain higher authority than these generic skills.

## 2. Install in a normal repository/workspace

For a repository used by another coding agent or harness, the minimum portable installation is:

```text
.agents/skills/                 # canonical skills
docs/skills/catalog.md          # lightweight discovery catalog
SYSTEM_INSTRUCTIONS.md          # universal phase/authority baseline
AGENTS.md or equivalent         # routing protocol merged into project authority
```

If the target harness uses a different skill directory convention, keep this repository as the source of truth and adapt only the discovery path. Do not rewrite the skill bodies unless the harness requires a real compatibility change; when adapting third-party skills, preserve provenance and license information.

After installation, verify the target runtime with `environment-audit`. Files existing on disk prove that the library is present; they do not prove that the harness automatically discovers skills, exposes subagents, provides browser automation, or grants Git/deploy access.

## 3. How skills are selected

There are two supported calling styles.

### Automatic routing

State the task normally. The workspace router should decide whether a skill is warranted.

Example:

```text
I want to redesign this dashboard. Do not implement yet.
Establish the visual direction first.
```

Expected primary skill: `frontend-director`.

A trivial task should use **no skill** when project authority is sufficient.

Example:

```text
Change the button text from "Start free" to "Start for free".
Do not make any other change.
```

Expected routing: no primary skill.

### Explicit invocation

Name the skill when you want to force a particular bounded procedure.

```text
Use frontend-director for this task.
Establish the visual contract only. Do not implement yet.
```

The skill name is the directory name under `.agents/skills/`.

## 4. Direct-call examples

| Skill | Example call |
|---|---|
| `master-orchestrator` | "Use master-orchestrator to determine the current phase and the single primary skill. Do not execute later phases." |
| `token-governor` | "Use token-governor to reduce the working set before continuing. Preserve only evidence needed for the current objective." |
| `vibe-mode` | "Use vibe-mode to build the smallest reversible slice that proves this idea. Stop when the hypothesis is demonstrable." |
| `frontend-director` | "Use frontend-director to define the visual contract. Do not write production UI yet." |
| `premium-web` | "Use premium-web to polish this already-implemented interface without changing the approved visual direction." |
| `ui-library-router` | "Use ui-library-router to choose the nearest existing component/source before considering custom implementation." |
| `ship-gate` | "Use ship-gate to determine whether this bounded change is actually ready. Report evidence and blockers; do not hide failed checks." |
| `environment-audit` | "Use environment-audit to verify shell, Git, browser, network, MCP and subagent capabilities. Do not install or configure anything." |
| `project-bootstrap` | "Use project-bootstrap to adopt this repository with the minimum missing agent context. Do not reorganize the architecture." |
| `browser-qa` | "Use browser-qa to verify the rendered behavior in a real browser/runtime. Keep unverified items explicitly NOT VERIFIED." |
| `skill-auditor` | "Use skill-auditor to review this external skill for overlap, portability, side effects, provenance and license before adoption." |
| `public-repo-gate` | "Use public-repo-gate before publication. Check sensitive material, provenance, licenses, generated artifacts and release surfaces." |

## 5. Calling references

Do not normally ask for reference files by name. The selected skill decides whether they are needed.

If you need to constrain loading explicitly:

```text
Use frontend-director.
Load only the references required by the active branch.
Do not read every file under references/.
```

This preserves progressive disclosure and keeps context cost bounded.

## 6. Recommended workspace start

For an unfamiliar workspace:

```text
Read AGENTS.md and SYSTEM_INSTRUCTIONS.md.
Use environment-audit to verify only the capabilities required for this project.
Do not install, authenticate, enable billing, commit, push, or deploy.
Then report the capability matrix and stop.
```

For an already-known workspace, start with the actual task. The router should not invoke `environment-audit` or any other skill mechanically when fresh evidence already exists.

## 7. Validate the stack repository

When modifying this stack itself:

```bash
npm run validate:release
```

On Windows PowerShell where `npm.ps1` is blocked:

```powershell
npm.cmd run validate:release
```

A green deterministic validation proves repository structure, support tooling, contract coverage, manifests, and privacy checks. Actual model-following behavior is Level D evidence and must be recorded separately under `evals/manual/`.

## 8. Updating a consumer workspace

Treat this repository as the upstream source of truth.

When updating:

1. compare the consumer's installed skill revision with this repository;
2. preserve project-specific authority files;
3. update skill files and catalog deliberately;
4. rerun `environment-audit` if the harness/runtime changed;
5. rerun the project's own tests plus any relevant skill contracts;
6. do not silently overwrite local adaptations.

The goal is a small, inspectable skill library that can be reused without turning every task into a large prompt or every repository into a copy of this repository's governance.
