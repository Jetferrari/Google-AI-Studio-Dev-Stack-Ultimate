# google-ai-studio-dev-stack

A public, project-agnostic development stack for Google AI Studio workflows and portable agent-skill runtimes.

The repository's first-party core is built around one rule: **a skill must solve a real failure mode with a bounded, inspectable procedure**. It is not a collection of personas or decorative prompt snippets.

## Release

**v1.0.0-ultimate — owned-skill core**

This release completes and validates the 12 first-party skills. Third-party projects are pinned and documented, but their skill bodies are not silently vendored into the core.

## What is actually validated

`npm run validate:release` currently verifies:

- 12/12 owned skills satisfy the repository's structural quality standard;
- every skill has explicit trigger/non-trigger boundaries, output and side-effect contracts;
- every skill has multiple observable completion criteria;
- every referenced support file resolves;
- **54 behavioral contract specifications** cover positive, boundary, fallback and adverse scenarios;
- deterministic support tooling passes Node tests;
- four upstream sources are pinned to concrete revisions;
- five AI Studio distribution modules build successfully;
- public-tree privacy scanning passes;
- efficiency and quality reports are regenerated from the repository itself.

The repository deliberately does **not** claim that these checks prove model compliance. Behavioral model eval is a separate Level D process documented in `docs/skills/EVAL_STANDARD.md`. No paid API/model run is implied by a green repository validation.

## Owned skills

| Skill | Failure mode it addresses |
|---|---|
| `master-orchestrator` | phase mixing and competing workflow ownership |
| `token-governor` | low-signal context and repeated/broad retrieval |
| `vibe-mode` | overengineering before a low-risk idea earns it |
| `frontend-director` | generic or contradictory visual decisions invented during coding |
| `premium-web` | polish that becomes accidental redesign or decoration-first work |
| `ui-library-router` | unnecessary dependencies/custom components when a nearer fit exists |
| `ship-gate` | unverified “done” claims and checklist theater |
| `environment-audit` | assumed capabilities that the current harness does not expose |
| `project-bootstrap` | imposing new governance instead of adopting the project that exists |
| `browser-qa` | treating code-level confidence as rendered/runtime proof |
| `skill-auditor` | importing redundant, unsafe, non-portable, or legally unclear skills |
| `public-repo-gate` | leaking secrets/private material/history/license problems into public artifacts |

See `docs/skills/catalog.md` and each `.agents/skills/<name>/SKILL.md`.

## Frontend workflow

A typical visual product path is intentionally split by responsibility:

```text
vibe-mode (when exploration is useful)
        ↓
frontend-director       visual contract
        ↓
ui-library-router       component source
        ↓
implementation
        ↓
browser-qa              rendered truth
        ↓
premium-web             finish without redesign
        ↓
ship-gate               evidence-based completion
```

`frontend-director` is original work in this repository. It was written from scratch rather than derived from a third-party frontend-design skill.

## AI Studio layout

### Playground

Use the small always-on baseline:

`aistudio/playground/SYSTEM_INSTRUCTIONS_COMPACT.md`

Then add only the relevant compiled module from `dist/`:

- `AI_STUDIO_FRONTEND_VIBE.md`
- `AI_STUDIO_REVIEW.md`
- `AI_STUDIO_BOOTSTRAP.md`
- `AI_STUDIO_SKILL_MAINTENANCE.md`

This avoids loading the entire skill library into every prompt.

### Build / repository-based work

Use `aistudio/build/BUILD_BOOTSTRAP.md` as the project-entry guardrail. Project-specific authority remains above this generic stack.

### Skill-aware/managed runtimes

The canonical first-party skill sources live under `.agents/skills/`. Run `environment-audit` before assuming the target runtime discovers them or exposes shell, Git, browser, MCP, subagents, network, or write permissions.

## Quality design

The first-party standard is documented in:

- `docs/skills/SKILL_DESIGN_STANDARD.md`
- `docs/skills/EVAL_STANDARD.md`
- `reports/QUALITY_VALIDATION.md`
- `reports/EFFICIENCY_REPORT.md`

The standard was informed by direct review of mature public skill-writing patterns, with Matt Pocock's public skills used as a reference of excellence. The repository's wording, skill boundaries, procedures, and first-party frontend direction are original. See `reports/REFERENCE_BENCHMARK.md` for the exact reference material reviewed.

## Tests

No third-party npm packages are required.

```bash
npm run validate:release
```

On Windows PowerShell environments where `npm.ps1` is blocked:

```powershell
npm.cmd run validate:release
```

Individual checks:

```bash
npm run validate:skills
npm run validate:provenance
npm run validate:sources
npm run validate:contracts
npm run test:scripts
npm run build:dist
npm run report:efficiency
npm run report:quality
npm run privacy
```

## Public-safety workflow

For confidential names that must be scanned without committing the names themselves, create:

`.privacy-denylist.local`

One literal term per line. It is ignored by Git.

The scanner is a detector, not a proof of safety. `public-repo-gate` also requires manual review of history, binary/media artifacts, provenance and publication surfaces as applicable.

## Third-party policy

Three modes are used:

- **OWN** — original skill maintained here;
- **ADAPTED** — copied/modified upstream work with pinned revision, license and per-skill provenance;
- **UPSTREAM** — referenced from the canonical project rather than copied.

Current tracked upstreams:

| Project | Source | License | Current mode |
|---|---|---|---|
| Matt Pocock Skills | https://github.com/mattpocock/skills | MIT | planned selective adaptation |
| Motion Site Builder | https://github.com/olbboy/motion-site-builder | MIT | quarantine/adaptation review |
| Vercel Agent Skills | https://github.com/vercel-labs/agent-skills | MIT | upstream-first |
| Google Gemini Skills | https://github.com/google-gemini/gemini-skills | Apache-2.0 | upstream-first |

Exact reviewed revisions are pinned in `sources.lock.yaml`. If third-party source is later copied, `PROVENANCE.md` and `THIRD_PARTY_NOTICES.md` are mandatory before release.

## Repository map

```text
.agents/skills/       canonical owned skills
adapters/             third-party adaptation plans
upstream/             upstream-only integration notes
aistudio/             AI Studio entry profiles
dist/                 compiled prompt modules
docs/skills/          skill design/evaluation standards
tests/contracts/      behavioral contract specifications
tests/scripts/        deterministic tool tests
reports/              generated quality/efficiency evidence
scripts/              zero-dependency validation/build tooling
templates/            project-level context templates
```

## License

Original material in this repository is MIT licensed. Third-party material, if later vendored, retains its own license and required notices.
