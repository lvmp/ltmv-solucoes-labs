# 💻 LTMV Soluções Labs — Repositório Oficial do Canal **Na Prática, Dev**

Repositório com o código-fonte **real, testado e replicável** dos episódios dos canais **[Na Prática, Dev (@NaPraticaDev)](https://www.youtube.com/@NaPraticaDev)** e **[In Practice, Dev (@InPracticeDev)](https://www.youtube.com/@InPracticeDev)**.

---

## Como Usar Este Repositório

Cada episódio vive em uma pasta auto-contida dentro de `episodios/` e possui **3 branches didáticas** para você acompanhar a evolução passo a passo:

1. `epXX/01-problema` — O cenário inicial real (bug, gargalo ou desorganização) com teste/evidência reproduzindo o problema.
2. `epXX/02-caminho-a` — A primeira tentativa / abordagem ingênua com seus prós e contras visíveis.
3. `epXX/03-solucao-final` — A solução escolhida aplicada com testes automatizados passando.

```bash
git clone https://github.com/lvmp/ltmv-solucoes-labs.git
cd ltmv-solucoes-labs
```

---

## Índice de Episódios

| Episódio | Tema | Stack | Branches |
| :--- | :--- | :--- | :--- |
| **Ep. 01** | [Setup Limpo na IDE, `AGENTS.md` & Padrão `.agents/`](./episodios/ep01-setup-ide-e-agentes/README.md) | Node.js + `.agents/` | `ep01/01-problema` → `ep01/02-caminho-a` → `ep01/03-solucao-final` |
