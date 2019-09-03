

import { ProductModel } from '../../product/models/product.model';

import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators'; import { Injectable, OnInit } from '@angular/core';

import { CartModel } from '../models/cart.model';
import { ProductService } from '../../product/service/products.service';
import { CartServicesModule } from '../cart-services.module';
const products: CartModel[] = [];

const productsInCartObservable: Observable<Array<CartModel>> = of(products);


@Injectable(
    { providedIn: CartServicesModule })
export class CartService implements OnInit {
    private productsInCart: Observable<Array<CartModel>>;
    // availableProducts: Observable<ProductModel[]>;
    constructor(private prodServ: ProductService) {
    }
    ngOnInit() {
        //  this.availableProducts = this.prodServ.getProducts();
    }
    getProductsInCartObserv(): Observable<Array<CartModel>> {
        return productsInCartObservable;
    }
    getProductsInCart(): Array<CartModel> {
        return products;
    }

    buy(prod: ProductModel): void {
        prod.count--;

        const cartItem = { ...prod, count: 1 };
        products.push(cartItem);


    }

    remove(prod: CartModel): void {
        const i = products.findIndex(t => prod.name === prod.name);
        if (i > -1) {
            products.splice(i, 1);
        }
    }

    clean(): void {
        while (products.length > 0) {
            products.forEach(element => {
                this.remove(element);
            });
        }
    }
    getTotalSum(): number {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price * currentValue.count;
        return products.reduce(reducer, 0);
        return -1;
    }

    getCount(): number {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.count;
        return products.reduce(reducer, 0);

    }
}
