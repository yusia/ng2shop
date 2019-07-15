import { Component } from '@angular/core';
import { ProductModel } from './feature/product/models/product.model';
import { CartService } from './feature/cart/services/cart.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  prodInCarCount = 0;
  title = 'Friends shop';

  constructor(private cartService: CartService) {
  }

  onBuy(prod: ProductModel): void {
    this.cartService.buy(prod);
    // this.cartService.products.length - лучше каким-то коротким гетером оформить
    this.prodInCarCount = this.cartService.products.length;
    console.log('buy');
  }
}
