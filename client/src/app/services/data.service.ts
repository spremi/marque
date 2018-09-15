import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { AppConst } from '../app.constants';
import { Bookmark } from '../models/bookmark';
import { Category } from '../models/category';
import { Icon } from '../models/icon';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  /**
   * Get list of icons
   */
  getIcons(): Observable<Icon[]> {
    const link = AppConst.API_BASE + AppConst.RES_ICON;

    return this.http.get<Icon[]>(link);
  }

  /**
   * Get list of categories
   */
  getCategories(): Observable<Category[]> {
    const link = AppConst.API_BASE + AppConst.RES_CATEGORY;

    return this.http.get<Category[]>(link);
  }

  /**
   * Get list of bookmarks for specific category.
   *
   * @param catId   Category identifier
   */
  getBookmarks(catId: string): Observable<Bookmark[]> {
    if (catId === null) {
      return of(null);
    }

    const link =
      AppConst.API_BASE +
      AppConst.RES_CATEGORY +
      '/' +
      catId +
      '/' +
      AppConst.RES_BOOKMARK;

    return this.http.get<Bookmark[]>(link);
  }
}
