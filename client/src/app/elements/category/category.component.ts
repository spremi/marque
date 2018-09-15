import {
  Component,
  HostBinding,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { AppConst } from 'src/app/app.constants';

import { Category } from '../../models/category';
import { HintService } from '../../services/hint.service';
import { SelectService } from '../../services/select.service';

@Component({
  selector: 'sp-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.sass'],
})
export class CategoryComponent implements OnInit, OnDestroy {
  private subSelect: Subscription = null;

  @Input()
  cat: Category;

  @HostBinding('class.selected')
  selected = false;

  constructor(private selectSvc: SelectService, private hintSvc: HintService) {}

  ngOnInit() {
    this.subSelect = this.selectSvc.category.subscribe((arg: Category) => {
      if (arg !== null) {
        this.selected = this.cat.id === arg.id;
      }
    });
  }

  ngOnDestroy() {
    if (this.subSelect) {
      this.subSelect.unsubscribe();
    }
  }

  onSelect() {
    this.selectSvc.set(this.cat);
  }

  onError(ev: Event) {
    this.cat.icon = AppConst.DEFAULT_ICON;
  }

  @HostListener('mouseover')
  onHover() {
    this.hintSvc.show(this.cat.desc);
  }

  @HostListener('mouseout')
  offHover() {
    this.hintSvc.clear();
  }
}
