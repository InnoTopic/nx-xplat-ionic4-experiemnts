import { NgModule } from '@angular/core';

// xplat
import { UIModule } from '@my-npm-scope/ionic';

const MODULES = [UIModule];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES]
})
export class SharedModule {}
