//
// [marque] server/src/server.ts
//
// Defines server application class.
//
// (c) 2018 Sanjeev Premi (spremi@ymail.com)
//
// SPDX-License-Identifier: BSD-3-Clause
//                          (http://spdx.org/licenses/BSD-3-Clause.html)
//
import express from 'express';

/**
 * @class
 * Defines the application server.
 */
export class Server {
  /**
   * Server is running in 'development' mode.
   *
   * @constant
   */
  public static readonly MODE_DEVELOPMENT = 'development';

  /**
   * Server is running in 'production' mode.
   *
   * @constant
   */
  public static readonly MODE_PRODUCTION = 'production';

  /**
   * Create an instance of application server
   *
   * @class Server
   * @method create
   * @static
   * @returns Application server instance
   */
  public static create(): Server {
    return new Server();
  }

  public app: express.Application;

  /**
   * Execution 'mode' of the server - production | development.
   */
  private mode: string;

  /**
   * Constructor
   *
   * @constructor
   */
  constructor() {
    this.app = express();

    this.mode = this.app.get('env');

    this.config();
    this.routes();
  }

  /**
   * Configure the server
   */
  private config() {}

  /**
   * Add 'api' routes
   */
  private routes() {}
}

export default Server;
