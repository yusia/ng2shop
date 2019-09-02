import { CartModel } from '../../cart/models/cart.model';

export class OrderModel {
  name: string;
  phone: String;
  constructor(
    public products: CartModel[]) { }
}
