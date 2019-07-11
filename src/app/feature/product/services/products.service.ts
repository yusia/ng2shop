import { ProductModel } from '../models/product.model';
import { Injectable } from '@angular/core';
import { Size } from '../models/Size.enum';
import { ProductModule } from '../product.module';

@Injectable()
export class ProductService {
    private products;
    constructor(){
    }

    getProducts():Array<ProductModel>{
        return [
            new ProductModel( 'American Shorthair Cat',
            'American Shorthair Cat',
            799,
            Size.medium, true),
            new ProductModel( 'Russian Blue Cat Breed',
            'The Russian Blue is gentle, quiet and even shy around strangers, but she’s affectionate and loyal toward her people. She’ll follow you around and even ride on your shoulder./n     She can entertain herself while home alone but loves to play games of fetch with her people. You may also find her jumping and climbing so she can observe everything from above. If you need an alarm clock, this feline relies on routine and will wake you each morning so she doesn’t miss breakfast. She’s tolerant of children and other cat-friendly pets.',
            699,
            Size.large, true),
            new ProductModel( 'American Shorthair Cat3',
            'American Shorthair Cat23',
            799,
            Size.medium, true),
            new ProductModel( 'American Shorthair Cat2',
            'American Shorthair Cat32',
            799,
            Size.medium, true),
          ];
    }
}