# AGENTS.md — LTMV Soluções (Ep. 01 Setup Padrão)

> Guia operacional conciso para agentes de IA (<= 120 linhas para evitar *Context Rot*).

## Comandos Exatos (Execute Antes de Entregar)
- Rodar testes unitários: `npm test` (`node --test test/discount.test.js`)
- Validar guardrails e estrutura: `npm run verify` (`node scripts/verify_setup.js`)

## Arquitetura & Convenções
- `src/orders/`: regras puras de domínio (sem `console.log`, sem I/O direto).
- Constantes de negócio devem ser nomeadas explicitamente (zero *magic numbers*).
- Entradas inválidas lançam `Error` explícito — **nunca** retorne `null` silencioso.

## Carregamento Sob Demanda (*Progressive Disclosure*)
- Regras detalhadas de domínio: `.agents/rules/domain_rules.md`
- Checklist de nova feature: `.agents/prompts/implement_feature.md`
