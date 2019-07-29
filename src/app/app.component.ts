import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

import { ProductModel } from './feature/product/models/product.model';
import { CartService } from './feature/shared/services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements AfterViewInit {

  @ViewChild('appTitle') appTitle: ElementRef;

   constructor(private cartService: CartService) {
        }

  ngAfterViewInit() {
    this.appTitle.nativeElement.innerHTML = 'Friend!';
  }
  onBuy(prod: ProductModel): void {
    this.cartService.buy(prod);
    console.log('buy');
  }

  get prodInCarCount() {
    return this.cartService.products.length;
  }
}
