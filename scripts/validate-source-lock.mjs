import fs from 'node:fs';

const text=fs.readFileSync('sources.lock.yaml','utf8');
const blocks=text.split(/^  (?=[A-Za-z0-9_-]+:\s*$)/m).slice(1);
let failed=false;
let count=0;
for(const raw of blocks){
  count++;
  const name=raw.match(/^([A-Za-z0-9_-]+):/m)?.[1] ?? `source-${count}`;
  const repo=raw.match(/^    repository:\s*(\S+)/m)?.[1];
  const rev=raw.match(/^    revision:\s*([0-9a-f]{40})$/m)?.[1];
  const license=raw.match(/^    license:\s*(\S+)/m)?.[1];
  const mode=raw.match(/^    mode:\s*(\S+)/m)?.[1];
  if(!repo || !rev || !license || !mode){
    console.error(`[FAIL] ${name}: repository, 40-char revision, license, and mode are required`);
    failed=true;
  } else console.log(`[OK] ${name} @ ${rev.slice(0,12)} (${license}, ${mode})`);
}
if(count===0){console.error('[FAIL] no locked upstream sources');failed=true;}
if(failed) process.exit(1);
console.log(`[OK] source lock: ${count} pinned sources`);
