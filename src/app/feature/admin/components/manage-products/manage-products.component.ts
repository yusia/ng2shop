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

  products: Observable<Array<ProductModel>>;
  constructor(private productsService: ProductService,
    private router: Router, private cartService: CartService) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  onEdit(id: number) {
    const link = ['/admin/products/edit', id];
    this.router.navigate(link);
  }
  onAdd(id: number) {
    const link = ['/admin/products/add'];
    this.router.navigate(link);
  }
}
