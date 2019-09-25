import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ProductsState } from './products.state';
import { selectRouterState } from '../router/router.selectors';
import { ProductModel } from 'src/app/feature/product/models';
import { Size } from 'src/app/feature/product/models/Size.enum';
const selectEntities = (state: ProductsState) => state.entities;
export const selectProductsState = createFeatureSelector<ProductsState>('products');

const selectProductsEntitites = createSelector(
  selectProductsState,
  selectEntities
);


/**
 * transform object to array
 */
export const selectProducts = createSelector(
  selectProductsEntitites,
  entities => {
    return Object.keys(entities).map(id => entities[+id]);
  }
);

export const selectSelectedProductByUrl = createSelector(
  selectProductsEntitites,
  selectRouterState,
  (products, router): ProductModel => {
    const productId = router.state.params.productId;
    if (productId && products) {
      return products[productId];
    } else {
      new ProductModel(null, null, '', 0, Size.unknown, 0);
    }
  }
);
