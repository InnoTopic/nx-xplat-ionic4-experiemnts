import { Component } from '@angular/core';
import { BaseComponent } from '@my-npm-scope/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.component.html'
})
export class HomeComponent extends BaseComponent {}
