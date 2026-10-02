import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { walkFiles } from './lib.mjs';

const root=process.cwd();
const exclude=new Set(['FILE_MANIFEST.sha256']);
const files=walkFiles(root,()=>true)
  .map(p=>path.relative(root,p).split(path.sep).join('/'))
  .filter(rel=>!rel.startsWith('.git/')&&!rel.startsWith('node_modules/')&&!exclude.has(rel))
  .sort();
const lines=[];
for(const rel of files){
  const hash=crypto.createHash('sha256').update(fs.readFileSync(path.join(root,rel))).digest('hex');
  lines.push(`${hash}  ${rel}`);
}
fs.writeFileSync('FILE_MANIFEST.sha256',lines.join('\n')+'\n','utf8');
console.log(`[OK] file manifest generated (${files.length} files)`);
