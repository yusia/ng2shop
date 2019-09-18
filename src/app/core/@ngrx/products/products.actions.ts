import { createAction, props } from '@ngrx/store';
import { IProduct } from 'src/app/feature/product/models';

export const getProducts = createAction('[Products] GET_PRODUCTS');

export const getProductsSuccess = createAction(
    '[Products] GET_PRODUCTS_SUCCEESS',
    props<{ products: IProduct[] }>()
);

export const getProductsError = createAction(
    '[Products] GET_PRODUCTS_ERROR',
    props<{ error: Error | string }>()
);