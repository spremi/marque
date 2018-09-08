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
import bodyParser from 'body-parser';
import express from 'express';

import { appRoutes, IAppRoute } from './routes';

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
  private config() {
    //
    // Enable CORS in development environment
    //
    if (this.mode === Server.MODE_DEVELOPMENT) {
      this.app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header(
          'Access-Control-Allow-Headers',
          'Origin, X-Requested-With, Content-Type, Accept',
        );

        next();
      });
    }

    //
    // Add static paths
    //
    this.app.use('/', express.static('./public'));
    this.app.use('/assets', express.static('./assets'));

    //
    // Use body parser middleware
    // Accept both JSON and url encoded values
    //
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  /**
   * Add 'api' routes
   */
  private routes() {
    appRoutes.forEach((elem: IAppRoute) => {
      this.app.use(elem.path, elem.router);
    });
  }
}

export default Server;
