import { ProductModel } from '../../product/models/product.model';
import { Injectable } from '@angular/core';

@Injectable()
export class CartService {
  // чуть позже тип будет другим, так как будет еще хранить количество куплного товара
    products: ProductModel[] = [];

    buy(prod: ProductModel): void {
        this.products.push(prod);
    }
    clean(): void {
        this.products.length = 0;
    }
}
