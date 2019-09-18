import { CartModel } from '../../cart/models/cart.model';

export class OrderModel {
  name: string;
  phone: string;
  constructor(
    public products: CartModel[]) { }
}
