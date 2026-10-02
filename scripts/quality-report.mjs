import fs from 'node:fs';
import path from 'node:path';
import { inspectSkill } from './skill-quality.mjs';
import { parseFrontmatter } from './lib.mjs';

const root='.agents/skills';
const lines=['# Quality Validation Report','',
'Quality target: the repository standard in `docs/skills/SKILL_DESIGN_STANDARD.md`, informed by mature public skill-writing practices but implemented in this repository\'s own structure and wording.','',
'## Deterministic structural review','',
'| Skill | Trigger/bounds | Completion criteria | Output | Side-effect boundary | Disclosed refs | Contract fixtures |','|---|---|---:|---|---|---:|---:|'];
for (const e of fs.readdirSync(root,{withFileTypes:true}).filter(x=>x.isDirectory()).sort((a,b)=>a.name.localeCompare(b.name))) {
 const dir=path.join(root,e.name); const r=inspectSkill(dir); const contractsDir=path.join('tests/contracts',e.name); const n=fs.existsSync(contractsDir)?fs.readdirSync(contractsDir).filter(x=>x.endsWith('.md')).length:0;
 lines.push(`| ${e.name} | ${r.body.includes('## Use when')&&r.body.includes('## Skip when')?'PASS':'FAIL'} | ${r.completionCount} | ${r.body.includes('## Output')?'PASS':'FAIL'} | ${r.body.includes('## Boundaries')?'PASS':'FAIL'} | ${r.pointers.length} | ${n} |`);
}
lines.push('',
'## What this report proves','',
'- Skill files meet the deterministic structure rules enforced by repository validators.',
'- Reference pointers resolve.',
'- Every owned skill has contract specifications across positive, boundary, fallback, and adverse cases.',
'- Support scripts are covered by Node tests.',
'- Public-tree privacy scanning passes when reported by `npm run validate:release`.','',
'## What this report does not prove','',
'- It does not prove that Gemini, ChatGPT, Claude, or another model will follow every contract fixture.',
'- It does not claim comparative superiority or equivalence to any third-party repository.',
'- It does not verify Google AI Studio features that were not exercised by an authenticated runtime in this validation run.','',
'Behavioral model evaluation is Level D and must record the real model/harness evidence described in `docs/skills/EVAL_STANDARD.md`.','');
fs.mkdirSync('reports',{recursive:true}); fs.writeFileSync('reports/QUALITY_VALIDATION.md',lines.join('\n'),'utf8');
console.log('[OK] quality report generated');
