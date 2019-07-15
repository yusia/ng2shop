import { ProductModel } from '../models/product.model';
import { Injectable } from '@angular/core';
import { Size } from '../models/Size.enum';
import { ProductModule } from '../product.module';

@Injectable()
export class ProductService {
    private products; // Почему не Array<ProductModel>? или убрать?
    constructor() {
    }

    getProducts(): Array<ProductModel> {
        return [
            new ProductModel('American Shorthair Cat',
                'American Shorthair Cat',
                799,
                Size.medium, true),
            new ProductModel('Russian Blue Cat Breed',
                'The Russian Blue is gentle, quiet and even shy around strangers; She’s tolerant of children and other cat-friendly pets.',
                699,
                Size.large, true),
            new ProductModel('American Shorthair Cat3',
                'American Shorthair Cat23',
                799,
                Size.medium, true),
            new ProductModel('American Shorthair Cat2',
                'American Shorthair Cat32',
                799,
                Size.medium, true),
        ];
    }
}
