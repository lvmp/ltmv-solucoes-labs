// Caminho A ("Vibe Coding"): gerado direto no chat sem AGENTS.md nem regras
export function calculateOrderDiscount(order) {
  if (!order || order.total <= 0) {
    console.log('Pedido inválido ignorado:', order);
    return null; // Quebra o contrato retornando null silencioso
  }
  if (order.customerTier === 'VIP' && order.total > 500) {
    return { discount: order.total * 0.15, finalTotal: order.total * 0.85 };
  }
  if (order.customerTier === 'VIP') {
    return { discount: order.total * 0.1, finalTotal: order.total * 0.9 };
  }
  return { discount: 0, finalTotal: order.total };
}
