import { Injectable } from '@angular/core';
import { OrderModel } from '../models/order.model';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

const orderList: OrderModel[] = [
];

@Injectable()
export class OrderService {
    constructor(
        private localStorage:LocalStorageService) {
    }

    saveOrder(order: OrderModel) {
        // orderList.push(order);
        
        let list:OrderModel[]=this.localStorage.getItem("orders") ;
        if(list){
            list.push(order);
        }
        else{
            list=[order];
        }
        this.localStorage.setItem("orders", list);
    }

    getOrders(): OrderModel[] {
        let list:OrderModel[]=this.localStorage.getItem("orders") ;
        return list ;
    }

}