# Ep. 01 — Setup Limpo na IDE, `AGENTS.md` e Padrão `.agents/`

Código oficial de apoio ao **Episódio 01** (*"Primeiro Dia na LTMV: Setup Limpo, Agentes na IDE e o Fim do Vibe Coding"*).

## Objetivo do Laboratório
Demonstrar na prática a diferença entre:
1. **`ep01/01-problema`:** projeto sem contexto estruturado, com código frágil no domínio e testes falhando.
2. **`ep01/02-caminho-a`:** abordagem *"Vibe Coding"* (pedindo código solto no chat sem regras), gerando números mágicos, silenciamento de erro (`null`) e violação de contrato.
3. **`ep01/03-solucao-final`:** setup enxuto com `AGENTS.md` + `.agents/rules/` + `.agents/prompts/` + validação determinística (`node --test` + `scripts/verify_setup.js`).

## Como Rodar em 1 Comando (Requer Node.js 20+)

```bash
cd episodios/ep01-setup-ide-e-agentes
npm test
```

Para validar também os guardrails de estrutura e engenharia de contexto:

```bash
npm run verify
```

## Navegando pelas Etapas no Git

```bash
git checkout ep01/01-problema
git checkout ep01/02-caminho-a
git checkout ep01/03-solucao-final
```
