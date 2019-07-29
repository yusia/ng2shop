import { IProduct } from '../../product/models/product.interface';
import { Size } from '../../product/models/Size.enum';


export class CartModel implements IProduct {
  constructor(
    public name: string,
    public description: string,
    public price: number,
    public category: Size = Size.unknown,
    public count: number) {  }
}
