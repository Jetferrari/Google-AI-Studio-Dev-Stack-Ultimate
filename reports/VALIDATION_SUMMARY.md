# Validation Summary — v1.0.0-ultimate

This report records what was actually validated before packaging.

## Validation environment

- Node.js: `v22.16.0`
- npm: `10.9.2`
- OS used for this validation run: `Linux 6.18.44 x86_64`
- External model/API behavioral eval: **not run**

The support scripts are written in portable Node.js and contain no shell-specific implementation logic, but this report does not claim a separate Windows execution run.

## Command

```text
npm run validate:release
```

## Observed results

- Owned skills structurally validated: **12 / 12**
- Adapted third-party skills present: **0**
- Pinned upstream sources validated: **4 / 4**
- Behavioral contract specifications: **54**
- Required contract classes present for every owned skill: **positive, boundary, fallback, adverse**
- Deterministic Node support tests: **6 passed, 0 failed**
- AI Studio distribution files built: **5**
- Public-tree privacy scan: **PASS**
- Review-needed high-risk artifact types found by scanner: **0**
- File-integrity manifest: **generated and verified**

## Public-safety scope

The packaged tree contains no Git history and no third-party skill bodies. The release scan covered the files included in the package. A future public Git repository must run `public-repo-gate` again against the actual Git history and publication surface before visibility is changed.

## Evaluation claim

This release has completed:

- **Level A** — structural validation;
- **Level B** — deterministic tooling tests;
- **Level C** — contract-specification coverage.

It has **not** completed Level D behavioral model evaluation against Google AI Studio/Gemini. The repository deliberately records this as `false` in `RELEASE_MANIFEST.json` rather than converting static checks into a model-performance claim.

A no-API manual Level D procedure is included under `evals/manual/` for later execution in the target UI.
