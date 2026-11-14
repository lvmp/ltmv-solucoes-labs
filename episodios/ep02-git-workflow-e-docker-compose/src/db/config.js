export function getDatabaseConfig() {
  // Problema: credenciais e host chumbados na máquina do dev anterior
  return {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '123456',
    database: 'ltmv_local_v2',
    connectionString: 'postgres://postgres:123456@localhost:5432/ltmv_local_v2',
  };
}
