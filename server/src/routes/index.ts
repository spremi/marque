//
// [marque] server/src/routes/index.ts
//
// Defines paths handled by the routers.
//
// (c) 2018 Sanjeev Premi (spremi@ymail.com)
//
// SPDX-License-Identifier: BSD-3-Clause
//                          (http://spdx.org/licenses/BSD-3-Clause.html)
//
import { Router } from 'express';

import categoryRoute from './category';
import iconRoute from './icon';
import licenseRoute from './license';

/**
 * Maps path to router instance
 */
export interface IAppRoute {
  path: string;
  router: Router;
}

const categoryRouter: Router = categoryRoute.open();
const iconRouter: Router = iconRoute.open();
const licenseRouter: Router = licenseRoute.open();

/**
 * Defines routes for the application
 *
 * @constant
 */
export const appRoutes: IAppRoute[] = [
  { path: '/api/category', router: categoryRouter },
  { path: '/api/icon', router: iconRouter },
  { path: '/api/license', router: licenseRouter },
];
