import { ProductModel } from '../../product/models/product.model';
import { Injectable } from '@angular/core';
import { Size } from '../../product/models/Size.enum';
import { ProductModule } from '../../product/product.module';

@Injectable()
export class ProductService {
    private products;
    constructor() {
    }

    getProducts(): Array<ProductModel> {
        return [
            new ProductModel('American Shorthair Cat',
                'American Shorthair Cat',
                799,
                Size.medium, 1),
            new ProductModel('Russian Blue Cat Breed',
                'The Russian Blue is gentle, quiet and even shy around strangers; She’s tolerant of children and other cat-friendly pets.',
                699,
                Size.large, 2),
            new ProductModel('American Shorthair Cat3',
                'American Shorthair Cat23',
                799,
                Size.medium, 3),
            new ProductModel('American Shorthair Cat2',
                'American Shorthair Cat32',
                799,
                Size.medium, 0),
        ];
    }
}
