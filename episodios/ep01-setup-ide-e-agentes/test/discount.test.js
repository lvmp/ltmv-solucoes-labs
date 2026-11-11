import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateOrderDiscount } from '../src/orders/discount.js';

test('calcula desconto padrão de 10% para cliente VIP com pedido acima de R$ 200', () => {
  const result = calculateOrderDiscount({ total: 300, customerTier: 'VIP' });
  assert.equal(result.discount, 30);
  assert.equal(result.finalTotal, 270);
});

test('não aplica desconto para pedido abaixo do mínimo', () => {
  const result = calculateOrderDiscount({ total: 100, customerTier: 'STANDARD' });
  assert.equal(result.discount, 0);
  assert.equal(result.finalTotal, 100);
});

test('lança erro explícito para valor negativo ou zero', () => {
  assert.throws(
    () => calculateOrderDiscount({ total: -50, customerTier: 'VIP' }),
    /Valor do pedido inválido/
  );
});

test('rejeita tier desconhecido em vez de falhar silenciosamente', () => {
  assert.throws(
    () => calculateOrderDiscount({ total: 250, customerTier: 'UNKNOWN' }),
    /Tier de cliente inválido/
  );
});
