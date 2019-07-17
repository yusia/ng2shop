import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from 'src/app/feature/product/models/product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html'
})
export class CartItemComponent implements OnInit {
  @Input() item:ProductModel;
  ngOnInit(): void {
    
  }

}
