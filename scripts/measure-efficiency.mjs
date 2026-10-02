import fs from 'node:fs';
import path from 'node:path';
import { parseFrontmatter, walkFiles, wordCount, approxTokens } from './lib.mjs';

const skillRoot = '.agents/skills';
const rows=[];
let totalMain=0,totalRef=0,totalPointerTokens=0,totalContracts=0;
for (const entry of fs.readdirSync(skillRoot,{withFileTypes:true}).filter(x=>x.isDirectory()).sort((a,b)=>a.name.localeCompare(b.name))) {
  const dir=path.join(skillRoot,entry.name);
  const text=fs.readFileSync(path.join(dir,'SKILL.md'),'utf8');
  const {data}=parseFrontmatter(text);
  const main=wordCount(text);
  const refFiles=walkFiles(path.join(dir,'references'),p=>p.endsWith('.md'));
  const refWords=refFiles.reduce((n,p)=>n+wordCount(fs.readFileSync(p,'utf8')),0);
  const contractsDir=path.join('tests/contracts',entry.name);
  const contracts=fs.existsSync(contractsDir)?fs.readdirSync(contractsDir).filter(x=>x.endsWith('.md')).length:0;
  const pointerTokens=approxTokens(data.description ?? '');
  rows.push({name:entry.name,main,refWords,refs:refFiles.length,contracts,pointerTokens});
  totalMain+=main;totalRef+=refWords;totalContracts+=contracts;totalPointerTokens+=pointerTokens;
}
const avg=Math.round(totalMain/rows.length);
const disclosedPct=totalMain+totalRef?Math.round(totalRef/(totalMain+totalRef)*100):0;
const md=[];
md.push('# Efficiency Report','',`Generated from repository text and deterministic counts. Token figures are **approximate** (characters / 4), not a model tokenizer.`,``,
'## Context profile','',
`- Owned skills: **${rows.length}**`,
`- Main skill words: **${totalMain}**`,
`- Supporting reference words: **${totalRef}**`,
`- Average main skill size: **${avg} words**`,
`- Reference material kept behind progressive disclosure: **${disclosedPct}%** of skill+reference words`,
`- Approximate total always-on description cost if a harness globally loads all descriptions: **${totalPointerTokens} tokens**`,
`- Contract specifications: **${totalContracts}**`,``,
'## Per-skill profile','',
'| Skill | Main words | Ref words | Ref files | Contracts | Approx description tokens |','|---|---:|---:|---:|---:|---:|');
for(const r of rows) md.push(`| ${r.name} | ${r.main} | ${r.refWords} | ${r.refs} | ${r.contracts} | ${r.pointerTokens} |`);
md.push('',
'## Interpretation','',
'- The always-on cost is intentionally concentrated in short routing descriptions; full procedures load only when invoked in skill-aware harnesses.',
'- Reference-heavy branches are disclosed into separate files so ordinary invocations do not need every edge-case rule at once.',
'- Contract count measures specification coverage, **not behavioral pass rate**. Real model compliance requires Level D evals described in `docs/skills/EVAL_STANDARD.md`.',
'- “Efficiency” here means context/structure efficiency and deterministic repository quality; it is not a benchmark of model speed, cost, or coding accuracy.','');
fs.mkdirSync('reports',{recursive:true});
fs.writeFileSync('reports/EFFICIENCY_REPORT.md',md.join('\n'),'utf8');
fs.writeFileSync('reports/efficiency.json',JSON.stringify({generated_at:new Date().toISOString(),rows,totals:{skills:rows.length,main_words:totalMain,reference_words:totalRef,approx_global_description_tokens:totalPointerTokens,contracts:totalContracts}},null,2),'utf8');
console.log('[OK] efficiency report generated');
