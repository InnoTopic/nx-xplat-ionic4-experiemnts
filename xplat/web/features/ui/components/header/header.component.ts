import { Component } from '@angular/core';

import { HeaderBaseComponent } from '@my-npm-scope/features';

@Component({
  selector: 'foo-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent extends HeaderBaseComponent {}
