import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { LicenseService } from './services/license.service';

@Component({
  selector: 'sp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit, OnDestroy {
  private subTrigger: Subscription = null;

  /**
   * Flag - Show/ Hide the license.
   */
  isLicense = false;

  constructor(private licenseSvc: LicenseService) {}

  ngOnInit() {
    this.subTrigger = this.licenseSvc.trigger.subscribe((arg: boolean) => {
      this.isLicense = arg;
    });
  }

  ngOnDestroy() {
    if (this.subTrigger) {
      this.subTrigger.unsubscribe();
    }
  }
}
