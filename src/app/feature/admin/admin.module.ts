import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { ProductModule } from '../product/product.module';
import { ProductComponent } from '../product/components';

@NgModule({
  declarations: [AdminRoutingModule.components],
  imports: [
    CommonModule,
    ProductModule,
    FormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
