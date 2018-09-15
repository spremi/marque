import { Component, HostListener, Input, OnInit } from '@angular/core';

import { Bookmark } from '../../models/bookmark';
import { HintService } from '../../services/hint.service';

@Component({
  selector: 'sp-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.sass'],
})
export class BookmarkComponent implements OnInit {
  @Input()
  bm: Bookmark;

  constructor(private hintSvc: HintService) {}

  ngOnInit() {}

  @HostListener('mouseover')
  onHover() {
    this.hintSvc.show(this.bm.desc);
  }

  @HostListener('mouseout')
  offHover() {
    this.hintSvc.clear();
  }

  onClick() {}
}
