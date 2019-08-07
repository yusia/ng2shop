import { NgModule, InjectionToken } from '@angular/core';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { ConfigOptionsService } from 'src/app/core/services/config-options.service';
import { ConstantsService } from 'src/app/core/services/constants.service';
import { GeneratorService } from 'src/app/core/services/generator.service';

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
