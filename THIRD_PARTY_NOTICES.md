# Third-Party Notices

`v1.0.0-ultimate` does **not** vendor third-party skill bodies into `.agents/skills/`. The first-party skills are `origin: OWN`.

The repository tracks these upstream projects for future integration/adaptation and benchmarking:

| Project | Repository | License | Mode |
|---|---|---|---|
| Matt Pocock Skills | https://github.com/mattpocock/skills | MIT | planned selective adaptation / quality benchmark |
| Motion Site Builder | https://github.com/olbboy/motion-site-builder | MIT | quarantine/adaptation review |
| Vercel Agent Skills | https://github.com/vercel-labs/agent-skills | MIT | upstream-first |
| Google Gemini Skills | https://github.com/google-gemini/gemini-skills | Apache-2.0 | upstream-first |

Exact revisions reviewed are recorded in `sources.lock.yaml`.

If any third-party source is later copied or modified in this repository, the change must add per-skill `PROVENANCE.md`, preserve all applicable upstream notices, document local modifications, and update this file before release.
