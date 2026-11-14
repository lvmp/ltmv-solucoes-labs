import http from 'node:http';
import { getDatabaseConfig } from './db/config.js';

const PORT = Number(process.env.PORT || 3000);

export function createServer() {
  return http.createServer((req, res) => {
    if (req.url === '/health') {
      const db = getDatabaseConfig();
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ status: 'ok', dbHost: db.host, dbName: db.database }));
      return;
    }
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not Found' }));
  });
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const server = createServer();
  server.listen(PORT, () => {
    console.log(`LTMV Orders API listening on port ${PORT}`);
  });
}
