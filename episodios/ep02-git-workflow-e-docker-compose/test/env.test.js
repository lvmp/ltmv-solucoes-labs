import test from 'node:test';
import assert from 'node:assert/strict';
import { getDatabaseConfig } from '../src/db/config.js';

test('deve ler DATABASE_URL das variáveis de ambiente (12-Factor Factor III/IV)', () => {
  const cfg = getDatabaseConfig({
    DATABASE_URL: 'postgres://ltmv:ltmv_dev_only@db:5432/ltmv_orders',
  });
  assert.equal(cfg.host, 'db');
  assert.equal(cfg.port, 5432);
  assert.equal(cfg.database, 'ltmv_orders');
});

test('deve falhar explicitamente se DATABASE_URL não estiver definida', () => {
  assert.throws(() => getDatabaseConfig({}), /DATABASE_URL/);
});
