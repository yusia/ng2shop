import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/feature/cart/services/cart.service';
import { ProductModel } from 'src/app/feature/product/models';
import { ProductService } from 'src/app/feature/product/service/products.service';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {

  products$: Observable<ProductModel[]>;
  constructor(public productsService: ProductService,
    private router: Router,
    private cartService: CartService) { }

  ngOnInit() {
    this.products$ = this.productsService.getProducts();
    
  }

  onEdit(id: number) {
    const link = ['/admin/managingproducts/edit', id];
    this.router.navigate(link);
  }
  onAdd(id: number) {
    const link = ['/admin/managingproducts/add'];
    this.router.navigate(link);
  }
}
