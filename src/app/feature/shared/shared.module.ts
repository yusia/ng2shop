import { NgModule } from '@angular/core';
import { CoolDirective } from './background/cool.directive';

@NgModule({
  declarations: [
    CoolDirective
  ],
  exports:[
    CoolDirective
  ],
})
export class SharedModule { }
