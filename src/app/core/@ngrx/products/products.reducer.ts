import { Action, createReducer, on } from '@ngrx/store';
import { ProductsState, intitialProductsState } from './products.state';
import * as ProductActions from './products.actions';
import { IProduct } from 'src/app/feature/product/models';

const reducer = createReducer(
    intitialProductsState,
    on(ProductActions.getProducts, state => {
        console.log('GET_PRODUCTS action being handled!');
        return {
            ...state,
            loading: true
        };
    }),
    on(ProductActions.getProductsSuccess, (state, props) => {
        console.log(' GET_PRODUCTS_SUCCEESS action being handled!');
        const products = [...props.products];
        const entities = products.reduce(
            (result: { [id: number]: IProduct }, product: IProduct) => {
              return {
                ...result,
                [product.id]: product
              };
            },
            {
              ...state.entities
            }
          );    return {
            ...state,
            loading: false,
            loaded: false,
            entities
        };
    }),
    on(ProductActions.getProductsError, (state, props) => {
        console.log(' GET_PRODUCTS_ERROR action being handled!');
        const error = props.error;
        return {
            ...state,
            loading: false,
            loaded: false,
            error
        };
    }),
);

export function productsReducer(state: ProductsState | undefined, action: Action) {
    return reducer(state, action);
}
