import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
let failed=false;let count=0;
for(const line of fs.readFileSync('FILE_MANIFEST.sha256','utf8').trim().split(/\r?\n/)){
  if(!line) continue; count++;
  const m=line.match(/^([0-9a-f]{64})  (.+)$/);
  if(!m){console.error(`[FAIL] malformed manifest line: ${line}`);failed=true;continue;}
  const [,expected,rel]=m;
  if(!fs.existsSync(rel)){console.error(`[FAIL] missing ${rel}`);failed=true;continue;}
  const actual=crypto.createHash('sha256').update(fs.readFileSync(rel)).digest('hex');
  if(actual!==expected){console.error(`[FAIL] hash mismatch ${rel}`);failed=true;}
}
if(failed) process.exit(1);
console.log(`[OK] file manifest verified (${count} files)`);
