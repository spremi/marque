import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { HintService } from '../../services/hint.service';

@Component({
  selector: 'sp-hint',
  templateUrl: './hint.component.html',
  styleUrls: ['./hint.component.sass'],
})
export class HintComponent implements OnInit, OnDestroy {
  private subHint: Subscription = null;

  hint: string = null;

  constructor(private hintSvc: HintService) {}

  ngOnInit() {
    this.subHint = this.hintSvc.hint.subscribe((arg: string) => {
      this.hint = arg;
    });
  }

  ngOnDestroy() {
    if (this.subHint) {
      this.subHint.unsubscribe();
    }
  }
}
