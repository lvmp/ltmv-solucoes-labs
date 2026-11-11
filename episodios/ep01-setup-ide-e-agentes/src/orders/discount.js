const VIP_DISCOUNT_RATE = 0.1;
const VIP_MIN_ORDER_TOTAL = 200;
const ALLOWED_TIERS = new Set(['VIP', 'STANDARD']);

export function calculateOrderDiscount(order) {
  if (!order || !Number.isFinite(order.total) || order.total <= 0) {
    throw new Error('Valor do pedido inválido: informe um total numérico positivo.');
  }

  if (!ALLOWED_TIERS.has(order.customerTier)) {
    throw new Error(`Tier de cliente inválido: ${order.customerTier}`);
  }

  const eligibleForVipDiscount =
    order.customerTier === 'VIP' && order.total >= VIP_MIN_ORDER_TOTAL;

  const discount = eligibleForVipDiscount
    ? Number((order.total * VIP_DISCOUNT_RATE).toFixed(2))
    : 0;

  return {
    discount,
    finalTotal: Number((order.total - discount).toFixed(2))
  };
}
