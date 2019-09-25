import { createAction, props } from '@ngrx/store';
import { IProduct, ProductModel } from 'src/app/feature/product/models';

export const getProducts = createAction('[Products] GET_PRODUCTS');

export const getProductsSuccess = createAction(
    '[Products] GET_PRODUCTS_SUCCEESS',
    props<{ products: ProductModel[] }>()
);

export const getProductsError = createAction(
    '[Products] GET_PRODUCTS_ERROR',
    props<{ error: Error | string }>()
);