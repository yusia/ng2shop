import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent, PathNotFoundComponent } from './components';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [AboutComponent, PathNotFoundComponent, LoginComponent],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
