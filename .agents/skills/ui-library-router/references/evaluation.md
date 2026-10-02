# Candidate Evaluation

For each viable candidate record only material differences:

- Accessibility: semantics, keyboard behavior, focus management, ARIA obligations.
- Visual fit: can existing tokens/layout conventions express it without fighting the API?
- Behavior fit: states/interactions/data model match the requirement.
- Runtime cost: dependency/bundle/client-JS cost where relevant.
- Adaptation cost: wrappers/overrides/forks required.
- Ownership: who upgrades/fixes it later?
- Provenance: license/source/attribution for copied code.

A candidate that fails a hard requirement is out; do not let a numerical score resurrect it.
