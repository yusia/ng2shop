import { ProductModel } from '../../product/models/product.model';
import { Injectable } from '@angular/core';

@Injectable()
export class CartService {
    products: ProductModel[] = [];

    buy(prod: ProductModel): void {
        this.products.push(prod);
    }
    clean(): void {
        this.products.length = 0;
    }
}
