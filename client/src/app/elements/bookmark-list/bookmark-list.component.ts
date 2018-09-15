import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';

import { Bookmark } from '../../models/bookmark';
import { Category } from '../../models/category';
import { DataService } from '../../services/data.service';
import { SelectService } from '../../services/select.service';

@Component({
  selector: 'sp-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrls: ['./bookmark-list.component.sass'],
})
export class BookmarkListComponent implements OnInit, OnDestroy {
  private subSelect: Subscription = null;

  constructor(private selectSvc: SelectService, private dataSvc: DataService) {}

  list: Bookmark[] = null;

  ngOnInit() {
    this.subSelect = this.selectSvc.category
      .pipe(
        map((arg: Category) => arg),
        filter((arg) => arg !== null),
        switchMap((arg) => {
          return this.dataSvc.getBookmarks(arg.id);
        }),
      )
      .subscribe((result: Bookmark[]) => {
        this.list = result;
      });
  }

  ngOnDestroy() {
    if (this.subSelect) {
      this.subSelect.unsubscribe();
    }
  }
}
