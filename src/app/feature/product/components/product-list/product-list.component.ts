import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers:[ProductService]
})
export class ProductListComponent  implements OnInit {
  products:ProductModel[];
  constructor(private _productsService:ProductService) { 
    
     }

  ngOnInit() {
   this.products=this._productsService.getProducts();    
  }

}
