export function getDatabaseConfig(env = process.env) {
  const rawUrl = env.DATABASE_URL;
  if (!rawUrl) {
    throw new Error('DATABASE_URL não definida. Copie .env.example para .env ou use docker compose up.');
  }
  const parsed = new URL(rawUrl);
  return {
    host: parsed.hostname,
    port: Number(parsed.port || 5432),
    user: decodeURIComponent(parsed.username),
    password: decodeURIComponent(parsed.password),
    database: parsed.pathname.replace(/^\//, ''),
    connectionString: rawUrl,
  };
}
