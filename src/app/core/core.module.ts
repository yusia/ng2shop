import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigOptionsService } from './services/config-options.service';
import { LocalStorageService } from './services/local-storage.service';
import { String64 } from './services/generator.factory';
import { GeneratorService } from './services/generator.service';
import { GeneratorFactory } from './services/generator.factory';
import { ConstantsService } from './services/constants.service';

const NAME = new InjectionToken<string>('ALMI');
const AboutShopStorage = new ConstantsService();

@NgModule({
  declarations: [],
  providers: [
    { provide: AboutShopStorage, useValue: AboutShopStorage },
    { provide: LocalStorageService, useExisting: window.localStorage },
    { provide: ConfigOptionsService, useClass: ConfigOptionsService },
    { provide: NAME, useValue: 'Friends shop' },// literal registration
    { provide: String64, useFactory: GeneratorFactory(64), deps: [GeneratorService] }
  ],
  imports: [
    CommonModule

  ]
})
export class CoreModule { }
