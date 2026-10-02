import fs from 'node:fs';

function read(p) { return fs.readFileSync(p,'utf8').trim(); }
function body(p) {
  const t = read(p);
  const end = t.indexOf('\n---\n', 4);
  return end >= 0 && t.startsWith('---\n') ? t.slice(end+5).trim() : t;
}

const system = read('aistudio/playground/SYSTEM_INSTRUCTIONS_COMPACT.md');
const skills = name => body(`.agents/skills/${name}/SKILL.md`);
fs.mkdirSync('dist',{recursive:true});

const outputs = {
  'dist/AI_STUDIO_CORE.md': `${system}\n`,
  'dist/AI_STUDIO_FRONTEND_VIBE.md': `${system}\n\n---\n\n${skills('vibe-mode')}\n\n---\n\n${skills('frontend-director')}\n\n---\n\n${skills('ui-library-router')}\n`,
  'dist/AI_STUDIO_REVIEW.md': `${system}\n\n---\n\n${skills('browser-qa')}\n\n---\n\n${skills('ship-gate')}\n`,
  'dist/AI_STUDIO_BOOTSTRAP.md': `${system}\n\n---\n\n${skills('environment-audit')}\n\n---\n\n${skills('project-bootstrap')}\n`,
  'dist/AI_STUDIO_SKILL_MAINTENANCE.md': `${system}\n\n---\n\n${skills('skill-auditor')}\n\n---\n\n${skills('public-repo-gate')}\n`
};
for (const [file,content] of Object.entries(outputs)) fs.writeFileSync(file,content,'utf8');
console.log(`[OK] dist built (${Object.keys(outputs).length} files)`);
