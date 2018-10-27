//
// [marque] src/routes/license/index.ts
//
// Implements router for 'license'.
//
// (c) 2018 Sanjeev Premi (spremi@ymail.com)
//
// SPDX-License-Identifier: BSD-3-Clause
//                          (http://spdx.org/licenses/BSD-3-Clause.html)
//
import { NextFunction, Request, Response, Router } from 'express';
import * as path from 'path';

import { Aura } from '../../aura';

const LICENSE_FILE = path.resolve(Aura.LICENSE_FILE);

export class LicenseRoute {
  /**
   * Create an instance of this class
   *
   * @class LicenseRoute
   * @method create
   * @static
   * @returns An instance of this class
   */
  public static getInstance(): LicenseRoute {
    if (!LicenseRoute.instance) {
      LicenseRoute.instance = new LicenseRoute();
    }

    return LicenseRoute.instance;
  }

  private static instance: LicenseRoute;

  /**
   * Router object
   */
  public router: Router;

  /**
   * Private constructor
   */
  private constructor() {
    this.router = Router();
  }

  /**
   * Implements default action for the route
   *
   * @param req   Express request object.
   * @param res   Express response object.
   * @param next  Next method to execute.
   */
  public index(req: Request, res: Response, next: NextFunction) {
    res.status(200).sendFile(LICENSE_FILE);
  }

  /**
   * Add endpoints and return router instance.
   *
   * @returns An instance of this router
   */
  public open(): Router {
    this.router.get('/', this.index);

    return this.router;
  }
}

//
// Export the route
//
const licenseRoute = LicenseRoute.getInstance();

export default licenseRoute;
