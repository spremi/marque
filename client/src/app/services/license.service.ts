import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { AppConst } from '../app.constants';

@Injectable({
  providedIn: 'root',
})
export class LicenseService {
  private _trigger = new BehaviorSubject<boolean>(false);

  public trigger = this._trigger.asObservable();

  constructor(private http: HttpClient) {}

  show() {
    this._trigger.next(true);
  }

  hide() {
    this._trigger.next(false);
  }

  /**
   * Get license text.
   */
  text(): Observable<string> {
    const link = AppConst.API_BASE + AppConst.RES_LICENSE;

    return this.http.get(link, { responseType: 'text' });
  }
}
