import { Component, OnInit, Input } from '@angular/core';
import { CartModel } from '../../models/cart.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html'
})
export class CartItemComponent implements OnInit {
  @Input() item: CartModel;
  ngOnInit(): void {
  }

}
