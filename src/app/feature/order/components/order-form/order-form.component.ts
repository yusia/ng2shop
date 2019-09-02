import { Component, OnInit } from '@angular/core';
import { OrderModel } from '../../models/order.model';
import { CartService } from '../../../cart/services/cart.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  order: OrderModel;
  constructor(
    private location: Location,
    public cartService: CartService) { }

  ngOnInit() {
    let products = this.cartService.getProductsInCart();
    this.order = new OrderModel(products);
   
  }

  onSave() {    
    localStorage.setItem("lastOrder",this.order.name)
  }
  
  onGoBack() {
    this.location.back();
  }
}
