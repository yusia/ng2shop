import { IProduct, ProductModel } from 'src/app/feature/product/models';
import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';

export interface ProductsState extends EntityState<IProduct>{
  readonly loading: boolean;
  readonly loaded: boolean;
  readonly error: Error | string;
  
}
export function selectProductId(Product: IProduct): number {
  // In this case this would be optional since primary key is id
  return Product.id;
}

// export function sortProductsByAction(Product1: IProduct, Product2: IProduct): number {
//   return Product1.action.localeCompare(Product2.action);
// }

export const adapter: EntityAdapter<IProduct> = createEntityAdapter<IProduct>({
  selectId: selectProductId,
//  sortComparer: sortProductsByAction
});


export const intitialProductsState: ProductsState = adapter.getInitialState({
  loading: false,
  loaded: false,
  error: null
});


