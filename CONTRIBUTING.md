# Contributing

## Skill bar

A skill must address an observable failure mode.

Each new skill must define:
- a precise trigger;
- when not to use it;
- ordered process or a clearly bounded reference discipline;
- observable completion criteria;
- output contract;
- side-effect policy;
- capability assumptions;
- relationship to neighboring skills;
- at least one contract fixture.

Prefer extending an existing skill over adding a near-duplicate.

## Provenance

Classify every skill as `OWN`, `ADAPTED`, or `UPSTREAM`.

Adapted third-party code must include `PROVENANCE.md`, source repository/path/revision, original license requirements, and meaningful local changes.
