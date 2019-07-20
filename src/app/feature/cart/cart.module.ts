import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartService } from '../shared/services/cart.service';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule,
    SharedModule],
  declarations: [
    CartItemComponent,
    CartListComponent],
  providers: [CartService],
  exports: [CartListComponent]
})
export class CartModule { }
