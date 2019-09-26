import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/feature/cart/services/cart.service';
import { ProductModel } from 'src/app/feature/product/models';
import { ProductService } from 'src/app/feature/product/service/products.service';
import { AppState, selectProducts } from 'src/app/core/@ngrx';

import { Store, select } from '@ngrx/store';
import { ProductsState } from 'src/app/core/@ngrx/products/products.state';
import * as ProductActions from 'src/app/core/@ngrx/products/products.actions'
import * as RouterActions from 'src/app/core/@ngrx/router/router.actions';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {

  products$: Observable<ProductModel[]>;
  productsState$: Observable<ProductsState>;
  
  constructor(public productsService: ProductService,
    private router: Router,
    private cartService: CartService,
    private store: Store<AppState>) { }

  ngOnInit() {

    console.log('We have a store! ', this.store);

    this.products$ = this.store.pipe(select(selectProducts));
    this.store.dispatch(ProductActions.getProducts());
    //this.products$ = this.productsService.getProducts();//this.store.pipe(select([products]));//

  }

  onEdit(id: number) {
    const link = ['/admin/managingproducts/edit', id];
  
    this.store.dispatch(RouterActions.go({
      path: link,
      queryParams:[{"id":id}]
    }));
  }
  onAdd(id: number) {
    const link = ['/admin/managingproducts/add'];
    this.store.dispatch(RouterActions.go({
      path: link
    }));
  }
}
