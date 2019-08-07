import { Component, OnInit, DoCheck } from '@angular/core';
import { CartService } from '../../../shared/services/cart.service';
import { CartModel } from '../../models/cart.model';


@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],

})
export class CartListComponent implements OnInit, DoCheck  {
  prodInCart: Array<CartModel>;
  total: number;
  count: number;
  sortOption: string;
  sotringOptions: Array<string>;
  constructor(public cartService: CartService) {
  }
  ngDoCheck() {
    this.count = this.cartService.getCount();
    this.total = this.cartService.getTotalSum();
  }

  ngOnInit() {
    this.prodInCart = this.cartService.products;
    this.total = this.cartService.getTotalSum();
    this.sotringOptions = ['name', 'decription', 'price'];
    this.sortOption = this.sotringOptions[0];
  }

  onChange(deviceValue) {
    console.log(this.sortOption);
}
  onRemove(prod: CartModel): void {
    this.cartService.remove(prod);
  }
  onIncrease(prod: CartModel) {

    prod.count++;
  }
  onDecrease(prod: CartModel) {
    if (prod.count > 0) {
      prod.count--;
    }
  }
}
