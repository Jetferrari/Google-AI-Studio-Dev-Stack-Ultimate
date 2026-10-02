# Bootstrap Branches

## Brownfield
Existing code and conventions carry authority. Prefer pointers and minimal additions. Never reorganize docs just to match this repository.

## Greenfield
Create only the durable coordination artifacts the project needs now. Avoid speculative domain maps, issue workflows, or ADR hierarchies with no consumer.

## Multi-context
Use only when independent packages/domains genuinely require different vocabularies/ADRs/agent instructions. Signals may include separately released products, independent bounded contexts, or package-level governance — not merely multiple folders.
