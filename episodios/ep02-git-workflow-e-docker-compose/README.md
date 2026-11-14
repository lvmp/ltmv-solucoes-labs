# Ep. 02 — "Na Faculdade Funcionava na Minha Máquina": Git Workflow & Docker Compose

Código oficial de apoio ao **Episódio 02** do canal **Na Prática, Dev (@NaPraticaDev)**.

## Etapas no Git
- `ep02/01-problema`: credenciais chumbadas (`localhost:5432`), sem `compose.yaml` e commits diretos na `main`.
- `ep02/02-caminho-a`: `compose.yaml` ingênuo (`depends_on` sem `healthcheck`) + senha hardcoded.
- `ep02/03-solucao-final`: **GitHub Flow** + `compose.yaml` com `pg_isready` (`service_healthy`), `.env.example` (12-Factor) e testes verdes.

## Como Rodar
```bash
cd episodios/ep02-git-workflow-e-docker-compose
npm test && npm run verify
```
