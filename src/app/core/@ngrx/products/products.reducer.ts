import { Action, createReducer, on } from '@ngrx/store';
import { adapter, ProductsState, intitialProductsState } from './products.state';
import * as ProductActions from './products.actions';

const reducer = createReducer(
    intitialProductsState,
    on(ProductActions.getProducts, state => {
        console.log('GET_PRODUCTS action being handled!');
        return {
            ...state,
            loading: true
        };
    }),
    on(ProductActions.getProductsSuccess, (state, { products }) => {
        console.log(' GET_PRODUCTS_SUCCEESS action being handled!');
        return adapter.addAll(products, { ...state, loading: false, loaded: true });
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
