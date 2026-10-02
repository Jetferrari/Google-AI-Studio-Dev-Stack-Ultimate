import fs from 'node:fs';
import path from 'node:path';
import { parseFrontmatter } from './lib.mjs';
const root='.agents/skills';
const skills=fs.readdirSync(root,{withFileTypes:true}).filter(x=>x.isDirectory()).map(e=>{
 const {data}=parseFrontmatter(fs.readFileSync(path.join(root,e.name,'SKILL.md'),'utf8'));
 return {name:e.name,origin:data.origin,license:data.license};
}).sort((a,b)=>a.name.localeCompare(b.name));
const manifest={version:'1.0.0-ultimate',generated_at:new Date().toISOString(),owned_skills:skills.filter(x=>x.origin==='OWN').map(x=>x.name),adapted_skills:skills.filter(x=>x.origin==='ADAPTED').map(x=>x.name),validation_levels_claimed:['A-structural','B-tooling','C-contract-specification'],behavioral_model_eval_level_D:false,third_party_vendored:skills.filter(x=>x.origin==='ADAPTED').length};
fs.writeFileSync('RELEASE_MANIFEST.json',JSON.stringify(manifest,null,2),'utf8');
console.log('[OK] release manifest generated');
