import { NgModule, InjectionToken } from '@angular/core';
import { LocalStorageService } from './services/local-storage.service';
import { ConfigOptionsService } from './services/config-options.service';
import { ConstantsService } from './services/constants.service';

const NAME = new InjectionToken<string[]>('token');

@NgModule({
  declarations: [
  ],
  exports: [  ],
   providers: [
    { provide: LocalStorageService, useClass: LocalStorageService},
    { provide: ConfigOptionsService},
    { provide: ConstantsService},
    { provide: GeneratorService},
    { provide: NAME, useValue: 'My friend shop'}]
})
export class CoreModule { }
