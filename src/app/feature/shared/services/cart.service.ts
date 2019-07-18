import { ProductModel } from '../../product/models/product.model';
import { Injectable } from '@angular/core';

@Injectable(
)
export class CartService {
    products: ProductModel[] = [];

    buy(prod: ProductModel): void {
        this.products.push(prod);
        prod.count--;
    }

    remove(prod: ProductModel): void {
        this.products= this.products.filter(p=>p!=prod);
        prod.count++;
    }
    
    clean(): void {
        this.products.length = 0;
    }

    getTotalSum():number{
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        return this.products.reduce(reducer,0);
    }
    
    getCountByProd(prod:ProductModel):number{       
        return this.products.filter(p=>p.name==prod.name).length;
    }
}
