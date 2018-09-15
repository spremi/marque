import { Component, OnDestroy, OnInit } from '@angular/core';
import { forkJoin, Observable, Subscription } from 'rxjs';
import { AppConst } from 'src/app/app.constants';
import { Icon } from 'src/app/models/icon';

import { Category } from '../../models/category';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'sp-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.sass'],
})
export class CategoryListComponent implements OnInit, OnDestroy {
  /**
   * List of categories
   */
  list: Category[] = null;

  /**
   * List of icons
   */
  icons: Icon[] = null;

  private subData: Subscription = null;

  constructor(private dataSvc: DataService) {}

  ngOnInit() {
    const obsIcons: Observable<Icon[]> = this.dataSvc.getIcons();
    const obsCategories: Observable<Category[]> = this.dataSvc.getCategories();

    this.subData = forkJoin(obsIcons, obsCategories).subscribe(
      ([icons, categories]) => {
        this.icons = icons;

        //
        // Replace icon 'id' with icon 'file'
        //
        categories.forEach((cat) => {
          cat.icon = this.iconFile(cat.icon);
        });

        this.list = categories;
      },
    );
  }

  ngOnDestroy() {
    if (this.subData) {
      this.subData.unsubscribe();
    }
  }

  /**
   * Find link corresponding to specified icon name.
   *
   * @param name  Name of the icon
   */
  private iconFile(name: string): string {
    if (Array.isArray(this.icons)) {
      const icon: Icon = this.icons.find((elem) => elem.name === name);

      if (icon) {
        return icon.link;
      }
    }

    return AppConst.DEFAULT_ICON;
  }
}
