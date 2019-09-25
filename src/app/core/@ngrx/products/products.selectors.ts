import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ProductsState } from './products.state';
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
