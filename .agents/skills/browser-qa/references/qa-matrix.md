# Browser QA Matrix

Choose rows/columns based on the change, not by default exhaustiveness.

Potential dimensions:

- viewport: narrow mobile / common mobile / tablet transition / desktop;
- state: default / loading / empty / error / populated / selected;
- input: pointer / keyboard / touch-emulation when relevant;
- health: DOM / console / network / URL/router;
- motion: normal / reduced-motion;
- auth: anonymous / authorized role when safely available.

A good charter covers the risk intersections created by the change. It does not compute the Cartesian product of every dimension.
