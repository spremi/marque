import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Category } from '../models/category';

@Injectable({
  providedIn: 'root',
})
export class SelectService {
  private selected = new BehaviorSubject<Category>(null);

  public category = this.selected.asObservable();

  constructor() {}

  set(arg: Category) {
    this.selected.next(arg);
  }

  clear() {
    this.selected.next(null);
  }
}
