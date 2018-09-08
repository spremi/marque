//
// [marque] src/routes/category/index.ts
//
// Implements router for 'category'.
//
// (c) 2018 Sanjeev Premi (spremi@ymail.com)
//
// SPDX-License-Identifier: BSD-3-Clause
//                          (http://spdx.org/licenses/BSD-3-Clause.html)
//
import { NextFunction, Request, Response, Router } from 'express';

export class CategoryRoute {
  /**
   * Create an instance of this class
   *
   * @class CategoryRoute
   * @method create
   * @static
   * @returns An instance of this class
   */
  public static getInstance(): CategoryRoute {
    if (!CategoryRoute.instance) {
      CategoryRoute.instance = new CategoryRoute();
    }

    return CategoryRoute.instance;
  }

  private static instance: CategoryRoute;

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
const categoryRoute = CategoryRoute.getInstance();

export default categoryRoute;
