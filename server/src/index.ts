//
// [marque] server/src/index.ts
//
// Implements the server startup
//
// (c) 2018 Sanjeev Premi (spremi@ymail.com)
//
// SPDX-License-Identifier: BSD-3-Clause
//                          (http://spdx.org/licenses/BSD-3-Clause.html)
//
import http from 'http';

import { Server } from './server';

const PORT = normalizePort(process.env.PORT || 4900);

const app = Server.create().app;

app.set('port', PORT);

const httpServer = http.createServer(app);

httpServer.listen(PORT);

httpServer.on('error', onError);
httpServer.on('listening', onListening);

/**
 * Normalize specified port into either a number, string, or false.
 */
function normalizePort(val: number | string): number | string | boolean {
  const port: number = typeof val === 'string' ? parseInt(val, 10) : val;

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

/**
 * Callback function for 'error' event.
 */
function onError(e: NodeJS.ErrnoException): void {
  if (e.syscall !== 'listen') {
    throw e;
  }

  const source = (typeof PORT === 'string' ? 'Pipe ' : 'Port ') + PORT;

  switch (e.code) {
    case 'EACCES':
      // tslint:disable-next-line:no-console
      console.error(source + ' : Insufficient privileges');
      process.exit(1);
      break;

    case 'EADDRINUSE':
      // tslint:disable-next-line:no-console
      console.error(source + ' : Already in use');
      process.exit(1);
      break;

    default:
      throw e;
  }
}

/**
 * Callback function for 'listening' event.
 */
function onListening(): void {
  const addr = httpServer.address();

  const source =
    typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;

  // tslint:disable-next-line:no-console
  console.log('Listening on ' + source);
}
