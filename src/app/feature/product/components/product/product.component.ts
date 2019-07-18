import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

import { ProductModel } from '../../models/product.model';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
  providers: []
})
export class ProductComponent implements OnInit {
  @Input() product: ProductModel;
  
  constructor() {  }

  ngOnInit() {
    console.log(this.product);
  }

}
