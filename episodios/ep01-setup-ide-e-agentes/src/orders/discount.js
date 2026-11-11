// Versão inicial desorganizada encontrada no primeiro dia do Severino
export function calculateOrderDiscount(order) {
  console.log('Calculando desconto...', order);
  if (order.customerTier === 'VIP') {
    const d = order.total * 0.1;
    return { discount: d, finalTotal: order.total - d };
  }
  return { discount: 0, finalTotal: order.total };
}
