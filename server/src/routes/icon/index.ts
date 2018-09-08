//
// [marque] src/routes/icon/index.ts
//
// Implements router for 'icon'.
//
// (c) 2018 Sanjeev Premi (spremi@ymail.com)
//
// SPDX-License-Identifier: BSD-3-Clause
//                          (http://spdx.org/licenses/BSD-3-Clause.html)
//
import { NextFunction, Request, Response, Router } from 'express';

export class IconRoute {
  /**
   * Create an instance of this class
   *
   * @class IconRoute
   * @method create
   * @static
   * @returns An instance of this class
   */
  public static getInstance(): IconRoute {
    if (!IconRoute.instance) {
      IconRoute.instance = new IconRoute();
    }

    return IconRoute.instance;
  }

  private static instance: IconRoute;

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
    res.status(200).send({});
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
const licenseRoute = IconRoute.getInstance();

export default licenseRoute;
