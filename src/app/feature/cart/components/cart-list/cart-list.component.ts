import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../shared/services/cart.service';
import { ProductModel } from '../../../product/models/product.model';
@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  prodInCart: Array<ProductModel>;
  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.prodInCart = this.cartService.products;
    console.log(this.prodInCart.length > 0);
  }

  onRemove(prod:ProductModel):void {
    this.cartService.remove(prod);
  }
  onClean():void {
    this.cartService.clean();
  }
}
