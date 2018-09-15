/**
 * @file        [marque] client/src/app/app.constants.ts
 *
 * @copyright   Sanjeev Premi, 2018.
 *
 * @license     BSD-3-Clause
 */

/**
 * Encapsulates commonly used constants.
 * @class
 */
export class AppConst {
  /**
   * Base URL for REST api.
   * @constant
   */
  static readonly API_BASE = 'http://localhost:4900/api/';

  /**
   * Token for 'category' resource in REST api.
   * @constant
   */
  static readonly RES_CATEGORY = 'category';

  /**
   * Token for 'bookmark' resource in REST api.
   * @constant
   */
  static readonly RES_BOOKMARK = 'bookmark';

  /**
   * Token for 'icon' resource in REST api.
   * @constant
   */
  static readonly RES_ICON = 'icon';

  /**
   * Token for 'license' resource in REST api.
   * @constant
   */
  static readonly RES_LICENSE = 'license';

  /**
   * Link to default icon.
   * @constant
   */
  static readonly DEFAULT_ICON = '/assets/icons/category/ic_folder_48px.svg';
}
