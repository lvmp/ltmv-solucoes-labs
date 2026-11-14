# Fluxo Oficial de Git — LTMV Soluções (GitHub Flow)

1. **`main` sempre deployável:** proibidos commits diretos na `main`.
2. **Feature Branches curtas:** crie a branch a partir da `main` atualizada (`git switch -c feat/docker-compose-healthcheck`).
3. **Pull Request + Checklist:** antes de abrir PR, rode `npm test && npm run verify` e `docker compose config -q`.
4. **Merge limpo:** após code review e CI verde, faça *Squash and Merge* e apague a branch remota.
