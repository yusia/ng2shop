import { ProductModel } from '../../product/models/product.model';
import { Injectable } from '@angular/core';
import { Size } from '../../product/models/Size.enum';

@Injectable()
export class ProductService {
    private products;
    constructor() {
    }

    getProducts(): Promise<Array<ProductModel>> {
        const products = [
            new ProductModel('American Shorthair Cat',
                '2',
                799,
                Size.medium, 1),
            new ProductModel('Russian Blue Cat Breed',
                'The Russian Blue is gentle, quiet and even shy around strangers; She’s tolerant of children and other cat-friendly pets.',
                699,
                Size.large, 2),
            new ProductModel('American Shorthair Cat3',
                '3',
                799,
                Size.medium, 3),
            new ProductModel('American Shorthair Cat2',
                'American Shorthair Cat32',
                799,
                Size.medium, 0),
        ];

        return Promise.resolve(products);
    }
}
