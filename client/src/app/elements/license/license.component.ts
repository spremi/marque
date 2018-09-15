import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

import { LicenseService } from '../../services/license.service';

@Component({
  selector: 'sp-license',
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.sass'],
})
export class LicenseComponent implements OnInit, OnDestroy {
  private subLicense: Subscription = null;

  text: SafeHtml = null;

  constructor(
    private licenseSvc: LicenseService,
    private sanitizer: DomSanitizer,
  ) {}

  ngOnInit() {
    this.subLicense = this.licenseSvc.text().subscribe((result: string) => {
      this.text = this.sanitizer.bypassSecurityTrustHtml(result);
    });
  }

  ngOnDestroy() {
    if (this.subLicense) {
      this.subLicense.unsubscribe();
    }
  }

  onClose() {
    this.licenseSvc.hide();
  }
}
