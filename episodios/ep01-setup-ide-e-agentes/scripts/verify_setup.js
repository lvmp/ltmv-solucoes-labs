import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const errors = [];

// 1. Verificar contrato AGENTS.md conciso (Context Engineering)
const agentsMdPath = path.join(root, 'AGENTS.md');
if (!fs.existsSync(agentsMdPath)) {
  errors.push('FALHA: AGENTS.md ausente na raiz do projeto.');
} else {
  const lines = fs.readFileSync(agentsMdPath, 'utf8').split('\n').length;
  if (lines > 120) {
    errors.push(`FALHA: AGENTS.md muito longo (${lines} linhas). Mantenha <= 120 linhas para evitar Context Rot.`);
  }
}

// 2. Verificar pasta modular .agents/rules/ e .agents/prompts/
const rulesDir = path.join(root, '.agents', 'rules');
const promptsDir = path.join(root, '.agents', 'prompts');
if (!fs.existsSync(rulesDir) || fs.readdirSync(rulesDir).length === 0) {
  errors.push('FALHA: .agents/rules/ ausente ou vazio.');
}
if (!fs.existsSync(promptsDir) || fs.readdirSync(promptsDir).length === 0) {
  errors.push('FALHA: .agents/prompts/ ausente ou vazio.');
}

// 3. Verificar higiene do domínio (sem console.log solto)
const domainFile = path.join(root, 'src', 'orders', 'discount.js');
if (fs.existsSync(domainFile)) {
  const code = fs.readFileSync(domainFile, 'utf8');
  if (code.includes('console.log(')) {
    errors.push('FALHA: console.log detectado dentro da camada de domínio (src/orders/discount.js).');
  }
}

if (errors.length > 0) {
  console.error('❌ GUARDRAILS REPROVADOS:');
  for (const e of errors) console.error(' -', e);
  process.exit(1);
}

console.log('✅ GUARDRAILS APROVADOS: AGENTS.md conciso, .agents/ estruturado e domínio limpo!');
