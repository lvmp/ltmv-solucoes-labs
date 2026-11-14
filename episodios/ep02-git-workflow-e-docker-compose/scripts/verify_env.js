import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const errors = [];

const composePath = path.join(root, 'compose.yaml');
if (!fs.existsSync(composePath)) {
  errors.push('Falta compose.yaml para subir API + PostgreSQL com paridade Dev/Prod.');
} else {
  const compose = fs.readFileSync(composePath, 'utf8');
  if (!compose.includes('healthcheck:')) {
    errors.push('compose.yaml não define healthcheck para o serviço de banco (db).');
  }
  if (!compose.includes('condition: service_healthy')) {
    errors.push('compose.yaml não usa depends_on com condition: service_healthy (risco de race condition).');
  }
  if (compose.includes('123456') || compose.includes('postgres:postgres')) {
    errors.push('compose.yaml contém credencial fraca/hardcoded em vez de variável de ambiente.');
  }
}

if (!fs.existsSync(path.join(root, '.env.example'))) {
  errors.push('Falta .env.example documentando as variáveis de ambiente obrigatórias.');
}

if (!fs.existsSync(path.join(root, 'CONTRIBUTING.md'))) {
  errors.push('Falta CONTRIBUTING.md definindo o fluxo Git (Feature Branches + Pull Request).');
}

if (errors.length > 0) {
  console.error('❌ AMBIENTE REPROVADO:');
  for (const err of errors) {
    console.error(`  - ${err}`);
  }
  process.exit(1);
}

console.log('✅ AMBIENTE APROVADO: Compose com healthcheck, 12-Factor e GitHub Flow documentado!');
