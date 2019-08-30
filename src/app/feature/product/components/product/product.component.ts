import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

import { ProductModel } from '../../models/product.model';
import { ActivatedRoute, Router, UrlTree } from '@angular/router';
import { Observable, } from 'rxjs';
import { pluck } from 'rxjs/operators';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  providers: []
})
export class ProductComponent implements OnInit {
  @Input() product: ProductModel;
  constructor(){}

  ngOnInit(): void {
  }

}
