import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartListComponent } from './components/cart-list/cart-list.component';

import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { CartService } from './services/cart.service';
import { CartComponent } from './cart.component';
import { CartRoutingModule } from './cart-routing.module';
import { OrderFormComponent } from './components/order-form/order-form.component';
@NgModule({
  imports: [CommonModule, FormsModule, SharedModule, CartRoutingModule],

  declarations: [CartComponent,
    CartItemComponent,
    CartListComponent,
    OrderFormComponent],
  providers: [CartService],
  exports: [CartComponent]
})
export class CartModule { }
