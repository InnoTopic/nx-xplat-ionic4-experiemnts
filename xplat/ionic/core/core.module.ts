import { NgModule, Optional, SkipSelf } from '@angular/core';

import { IonicModule } from '@ionic/angular';
import { throwIfAlreadyLoaded } from '@my-npm-scope/utils';
import { FooCoreModule } from '@my-npm-scope/web';

@NgModule({
  imports: [FooCoreModule, IonicModule.forRoot()]
})
export class FooIonicCoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: FooIonicCoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'FooIonicCoreModule');
  }
}
