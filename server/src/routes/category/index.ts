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

import appDB from '../../data';

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
   *
   * @returns     An array of category objects
   */
  public index(req: Request, res: Response, next: NextFunction) {
    const db = appDB.get();

    if (!db) {
      res.status(500).send('Database object is null');
      return;
    }

    const data = db.getData('/categories');

    //
    // Create array from the object based on keys
    //
    const ret = Object.keys(data).map((key) => data[key]);

    res.status(200).send(ret);
  }

  /**
   * Get list of bookmarks for specified category.
   *
   * @param req   Express request object.
   * @param res   Express response object.
   * @param next  Next method to execute.
   *
   * @returns     An array of category objects
   */
  public bookmarks(req: Request, res: Response, next: NextFunction) {
    const db = appDB.get();

    if (!db) {
      res.status(500).send('Database object is null');
      return;
    }

    if (!req.params.catId) {
      res.status(500).send('No category was specified');
      return;
    }

    const catId = req.params.catId;

    //
    // TODO: For now, skip checking for valid category Id
    //

    const result = db.getData('/bookmarks/' + catId + '/list');

    //
    // Create array from the object based on keys
    //
    const ret = Object.keys(result).map((key) => result[key]);

    res.status(200).send(ret);
  }

  /**
   * Add endpoints and return router instance.
   *
   * @returns An instance of this router
   */
  public open(): Router {
    this.router.get('/', this.index);
    this.router.get('/:catId/bookmark', this.bookmarks);

    return this.router;
  }
}

//
// Export the route
//
const categoryRoute = CategoryRoute.getInstance();

export default categoryRoute;
