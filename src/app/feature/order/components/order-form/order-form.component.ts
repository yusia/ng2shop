import { Component, OnInit } from '@angular/core';
import { OrderModel } from '../../models/order.model';
import { CartService } from '../../../cart/services/cart.service';
import { Location } from '@angular/common';
import { OrderService } from '../../services/order.service';
@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  order: OrderModel;
  total: number;
  constructor(
    private location: Location,
    public cartService: CartService,
    private orderService: OrderService) { }

  ngOnInit() {
    let products = this.cartService.getProductsInCart();
    this.total = this.cartService.getTotalSum();
    this.order = new OrderModel(products);

  }

  onSave() {
    this.orderService.saveOrder(this.order);
    this.cartService.clean();
    this.onGoBack();
  }

  onGoBack() {
    this.location.back();
  }
}
