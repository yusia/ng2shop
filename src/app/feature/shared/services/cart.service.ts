import { ProductModel } from '../../product/models/product.model';
import { Injectable, OnInit } from '@angular/core';
import { CartModel } from '../../cart/models/cart.model';
import { ProductService } from './products.service';

@Injectable(
)
export class CartService implements OnInit {

    products: CartModel[] = [];
    private availableProducts: Array<ProductModel>;
    constructor(private prodServ: ProductService) {

    }
    ngOnInit(): void {
        this.availableProducts =   this.prodServ.getProducts();
    }

    buy(prod: ProductModel): void {
        prod.count--;
        const prodInCart = this.products.find(p => p.name === prod.name);
        if ( prodInCart) {
            prodInCart.count++;
        } else {
            const cartItem = {...prod, count: 1};
            this.products.push(cartItem);
            }
    }

    remove(prod: CartModel): void {
        const index: number = this.products.indexOf(prod);
        if (index !== -1) {
            this.products.splice(index, 1);
            const availableProd = this.availableProducts.find(p => p.name === prod.name);
            availableProd.count += prod.count;
         }
    }

    clean(): void {
        while (this.products.length > 0) {
            this.products.forEach(element => {
                this.remove( element);
            });
        }
    }

    getTotalSum(): number {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price * currentValue.count;
        return this.products.reduce(reducer, 0);
    }

    getCount(): number {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.count;
        return this.products.reduce(reducer, 0);
    }
}
