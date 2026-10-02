# Evaluation Standard

This repository separates four kinds of validation so that a green check never claims more than it proves.

## Level A — structural validation

Deterministic checks over skill files:

- valid frontmatter;
- directory/name consistency;
- required design sections;
- owned/adapted provenance rules;
- reference pointers resolve;
- minimum contract-fixture coverage.

A Level A pass proves repository structure and policy conformance, not model behavior.

## Level B — tooling tests

Node test cases exercise repository scripts against temporary fixtures, including privacy detection, malformed skill rejection, provenance rejection, and distribution generation.

A Level B pass proves the deterministic support tooling behaves as tested.

## Level C — contract specification review

Each skill has scenario fixtures describing expected behavior and explicit failure conditions. Coverage tooling verifies every owned skill has the required scenario classes.

A Level C pass proves behavioral expectations are specified and reviewable. It does **not** prove a model follows them.

## Level D — model behavioral eval

A real target model/harness runs the fixtures with the skill loaded, and an evaluator scores the observed output against the fixture contract.

Level D requires an authenticated model runtime and may have external cost or quota implications. It must record:

- model ID and date;
- harness/runtime;
- system instructions;
- fixture revision;
- evaluator method;
- pass/fail evidence.

This repository must never label Level A–C checks as Level D.
