import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { ProductModule } from '../product/product.module';
import { ProductComponent } from '../product/components';
import { OrderModule } from '../order/order.module';

@NgModule({
  declarations: [AdminRoutingModule.components],
  imports: [
    CommonModule,
    ProductModule,
    FormsModule,
    OrderModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
