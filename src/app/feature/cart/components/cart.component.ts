import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ProductModel } from '../../product/models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {
  prodInCart: Array<ProductModel>;
  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.prodInCart = this.cartService.products;
    console.log(this.prodInCart.length > 0);
  }

  onRemove() {
    this.cartService.clean();
  }
}
