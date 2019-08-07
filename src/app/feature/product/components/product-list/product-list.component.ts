import { Component, OnInit, Output, EventEmitter} from '@angular/core';

import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../../shared/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService]
})
export class ProductListComponent implements OnInit {
  @Output() buyProd: EventEmitter<any> = new EventEmitter();

  products: Promise<Array<ProductModel>>;
  constructor(private productsService: ProductService) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  onBuy(prod: ProductModel): void {
    this.buyProd.emit(prod);
  }
}
