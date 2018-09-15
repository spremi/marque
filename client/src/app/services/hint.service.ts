import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HintService {
  private _hint = new BehaviorSubject<string>(null);

  public hint = this._hint.asObservable();

  constructor() {}

  show(arg: string) {
    this._hint.next(arg);
  }

  clear() {
    this._hint.next(null);
  }
}
