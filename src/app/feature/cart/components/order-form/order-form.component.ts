import { Component, OnInit } from '@angular/core';
import { OrderModel } from '../../models/order.model';
import { CartService } from '../../services/cart.service';
import { map } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { CartModel } from '../../models/cart.model';
import { Location } from '@angular/common';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  order: OrderModel;
  constructor(
    private location: Location,
    public cartService: CartService,
    localStorage:LocalStorageService) { }

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
