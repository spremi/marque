//
// [marque] src/data.ts
//
// Implements singleton for accessing JSON database.
//
// (c) 2018 Sanjeev Premi (spremi@ymail.com)
//
// SPDX-License-Identifier: BSD-3-Clause
//                          (http://spdx.org/licenses/BSD-3-Clause.html)
//
import JsonDB from 'node-json-db';

/**
 * Path to JSON file used as application database.
 */
const APP_DATA_FILE = 'assets/data/db.json';

/**
 * @class
 * Defines the class encapsulating the database object.
 */
export class AppDB {
  /**
   * Create an instance of this class
   *
   * @class AppDB
   * @method create
   * @static
   * @returns An instance of this class
   */
  public static getInstance(): AppDB {
    if (!AppDB.instance) {
      AppDB.instance = new AppDB();
    }

    return AppDB.instance;
  }

  /**
   * Instance of this class
   */
  private static instance: AppDB;

  /**
   * Database object
   */
  private db: JsonDB;

  /**
   * Private constructor
   */
  private constructor() {
    this.db = new JsonDB(APP_DATA_FILE, true, true);
  }

  /**
   * Get the database object
   *
   * @returns Instance of the database object
   */
  public get(): JsonDB {
    return this.db;
  }
}

//
// Export database instance
//
const appDB = AppDB.getInstance();

export default appDB;
