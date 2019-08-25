import { Component, OnInit, Output, EventEmitter} from '@angular/core';

import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../../shared/services/products.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService]
})
export class ProductListComponent implements OnInit {
  @Output() buyProd: EventEmitter<any> = new EventEmitter();

  products: Observable<Array<ProductModel>>;
  constructor(private productsService: ProductService,
    private router: Router) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  onBuy(prod: ProductModel): void {
    this.buyProd.emit(prod);
  }
  onDetails(prod: ProductModel): void {
    const link = ['/details', prod];
    this.router.navigate(link);
  }
  
  onDisplayFeedbacks(prodId:number): void {
    this.router.navigate([{ outlets: { feedbacks: ['feedbacks',prodId] } }]);
  }
}
