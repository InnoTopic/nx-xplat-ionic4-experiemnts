import { Component } from '@angular/core';

import { HeaderBaseComponent } from '@my-npm-scope/features';

@Component({
  selector: 'foo-ion-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent extends HeaderBaseComponent {}
