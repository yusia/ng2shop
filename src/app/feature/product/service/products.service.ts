import { ProductModel } from '../models/product.model';
import { Injectable } from '@angular/core';
import { Size } from '../models/Size.enum';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const productsList = [
    new ProductModel(5, 'American Shorthair Cat',
        '2',
        799,
        Size.medium, 1),
    new ProductModel(1, 'Russian Blue Cat Breed',
        'The Russian Blue is gentle, quiet and even shy around strangers; She’s tolerant of children and other cat-friendly pets.',
        699,
        Size.large, 2),
    new ProductModel(2, 'American Shorthair Cat3',
        '3',
        799,
        Size.medium, 3),
    new ProductModel(3, 'American Shorthair Cat2',
        'American Shorthair Cat32',
        799,
        Size.medium, 0),
];
const productsListObservable: Observable<Array<ProductModel>> = of(productsList);
@Injectable()
export class ProductService {
    private products;
    constructor() {
    }
    getProducts(): Observable<Array<ProductModel>> {

        return productsListObservable;
    }
    getProduct(id: number): Observable<ProductModel> {
        return this.getProducts()
            .pipe(
                map((products: Array<ProductModel>) => products.find(user => user.id === +id)),
                catchError(err => throwError('Error in getUser method'))
            );
    }
    deleteProduct(id: number) {
        // this.getProducts()
        // .pipe(
        //   delete((products: Array<ProductModel>) => products.find(user => user.id === +id)),
        //   catchError(err => throwError('Error in getUser method'))
    }

    update(product: ProductModel): void {
        const i: number = productsList.findIndex(p => p.id === product.id);
        if (i > -1) {
            productsList.splice(i, 1, product);
        }
    }

    create(product: ProductModel): void {
      
        productsList.push(product);
    }
}
