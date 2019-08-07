import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartService } from '../shared/services/cart.service';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartModel } from './models/cart.model';

import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  imports: [CommonModule , FormsModule, SharedModule],

  declarations: [
    CartItemComponent,
    CartListComponent],
  providers: [CartService],
  exports: [CartListComponent]
})
export class CartModule { }
