import { CartModel } from './cart.model';

export class OrderModel {
  name: string;
  phone: String;
  constructor(
    public products: CartModel[]) { }
}
