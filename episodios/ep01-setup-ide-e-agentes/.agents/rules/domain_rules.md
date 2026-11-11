# Regras de Domínio — LTMV Soluções

1. **Funções Puras:** Código dentro de `src/orders/` não pode chamar `console.log`, ler arquivos ou acessar rede.
2. **Falha Explícita (*Fail Fast*):** Sempre valide valores numéricos (`Number.isFinite(total) && total > 0`) e enumerações (`VIP`, `STANDARD`) lançando `Error` descritivo.
3. **Sem Números Mágicos:** Taxas e valores mínimos devem estar declarados em constantes no topo do módulo.
4. **Cobertura de Bordas:** Toda nova regra exige teste para caminho feliz, limite mínimo e entrada inválida.
