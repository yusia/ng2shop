import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/feature/order/services/order.service';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.css']
})
export class ManageOrdersComponent implements OnInit {

  constructor(public orderService:OrderService) { }

  ngOnInit() {
 
  }

}
