import { Size } from './Size.enum';
import { IProduct } from './product.interface';

export class ProductModel implements IProduct {
  constructor(
    public name: string,
    public description: string,
    public price: number,
    public category: Size = Size.unknown,
    public isAvailable: boolean = false) {

  }
}