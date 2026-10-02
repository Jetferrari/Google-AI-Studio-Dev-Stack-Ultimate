# Skill Audit Rubric

Score each axis 0–2 with evidence.

| Axis | 0 | 1 | 2 |
|---|---|---|---|
| Trigger | vague/colliding | partly bounded | precise trigger + non-trigger |
| Unique failure mode | duplicate/no-op | partly distinct | clearly earns existence |
| Procedure | advice only/confused | usable but loose | bounded process/reference discipline |
| Completion | absent | partial | checkable and exhaustive for scope |
| Output | undefined | implicit | stable inspectable contract |
| Side effects | hidden | partly described | explicit mutation/approval boundary |
| Portability | hard assumptions | conditional gaps | assumptions + safe fallbacks |
| Context design | bloated/duplicated | acceptable | progressive disclosure/high signal |
| Composability | competes with peers | some overlap | clear ownership/handoffs |
| Provenance | unclear | incomplete | pinned/licensed/change-recorded |

Interpretation is not a popularity score:

- any 0 in provenance/safety can block adoption regardless of total;
- scores identify work; the final verdict also considers overlap and whether upstream should remain canonical.
