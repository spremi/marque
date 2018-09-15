import { Component, OnInit } from '@angular/core';

import { HintService } from '../../services/hint.service';
import { LicenseService } from '../../services/license.service';

@Component({
  selector: 'sp-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass'],
})
export class FooterComponent implements OnInit {
  constructor(
    private hintSvc: HintService,
    private licenseSvc: LicenseService,
  ) {}

  ngOnInit() {}

  onLicenseHover() {
    this.hintSvc.show('The 3-Clause BSD License. Click to view.');
  }

  onLicenseOut() {
    this.hintSvc.clear();
  }

  onLicenseClick() {
    this.licenseSvc.show();
  }
}
