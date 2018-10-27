//
// [marque] server/src/aura.ts
//
// Defines global constants used across the server.
//
// (c) 2018 Sanjeev Premi (spremi@ymail.com)
//
// SPDX-License-Identifier: BSD-3-Clause
//                          (http://spdx.org/licenses/BSD-3-Clause.html)
//

/**
 * Defines global constants used across the server.
 * @class
 */
export class Aura {
  /**
   * Server is running in 'development' mode.
   */
  public static readonly DEVELOPMENT = 'development';

  /**
   * Server is running in 'production' mode.
   */
  public static readonly PRODUCTION = 'production';

  /**
   * Running from production bundle?
   */
  public static readonly IN_BUNDLE = false;

  /**
   * Path to JSON database.
   */
  public static readonly DB_FILE = Aura.IN_BUNDLE
    ? 'data/db.json'
    : 'assets/data/db.json';

  /**
   * Path to icons directory.
   */
  public static readonly ICONS_DIR = Aura.IN_BUNDLE
    ? 'resources/icons'
    : 'assets/icons';

  /**
   * Path to license file.
   */
  public static readonly LICENSE_FILE = Aura.IN_BUNDLE
    ? 'resources/license.html'
    : 'assets/license.html';
}

export default Aura;
