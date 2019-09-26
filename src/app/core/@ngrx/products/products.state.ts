import { IProduct, ProductModel } from 'src/app/feature/product/models';
import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';

export interface ProductsState {
  entities: Readonly<{ [id: number]: IProduct }>;
  readonly loading: boolean;
  readonly loaded: boolean;
  readonly error: Error | string;
  
}
export function selectProductId(Product: IProduct): number {
  // In this case this would be optional since primary key is id
  return Product.id;
}

export const intitialProductsState: ProductsState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null
};


