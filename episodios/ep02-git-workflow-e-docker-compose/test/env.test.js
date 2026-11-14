import test from 'node:test';
import assert from 'node:assert/strict';
import { getDatabaseConfig } from '../src/db/config.js';

test('deve ler DATABASE_URL das variáveis de ambiente (12-Factor Factor III/IV)', () => {
  const prev = process.env.DATABASE_URL;
  process.env.DATABASE_URL = 'postgres://ltmv:secret@db:5432/ltmv_orders';
  try {
    const cfg = getDatabaseConfig();
    assert.equal(cfg.host, 'db');
    assert.equal(cfg.database, 'ltmv_orders');
    assert.equal(cfg.connectionString, process.env.DATABASE_URL);
  } finally {
    if (prev === undefined) delete process.env.DATABASE_URL;
    else process.env.DATABASE_URL = prev;
  }
});

test('não deve expor senha padrão hardcoded (123456)', () => {
  const cfg = getDatabaseConfig();
  assert.notEqual(cfg.password, '123456');
});
