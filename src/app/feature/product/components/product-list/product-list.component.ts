import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../service/products.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/feature/cart/services/cart.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/@ngrx';
 import * as RouterActions from 'src/app/core/@ngrx/router/router.actions';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService]
})
export class ProductListComponent implements OnInit {
 // @Output() buyProd: EventEmitter<any> = new EventEmitter();

  products: Observable<Array<ProductModel>>;
  constructor(private productsService: ProductService,
              private router: Router, private cartService: CartService,
              private store: Store<AppState>) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  onBuy(prod: ProductModel): void {
    this.cartService.buy(prod);
  }
  onDetails(prodId: number): void {
    const link = ['/details', prodId];
    this.store.dispatch(RouterActions.go({
      path: link
    }));
  //  this.router.navigate(link);
  }

  onDisplayFeedbacks(prodId: number): void {
    this.router.navigate([{ outlets: { feedbacks: ['feedbacks', prodId] } }]);
  }
}
