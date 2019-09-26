import { Injectable } from '@angular/core';
import * as RouterActions from './../router/router.actions';


// @NgRx
import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError, concatMap, pluck } from 'rxjs/operators';

import { ProductService } from 'src/app/feature/product/service/products.service';
import * as ProductsActions from './products.actions';

@Injectable()
export class ProductsEffects {

    constructor(private actions$: Actions, private prodServ: ProductService) {
        console.log('[Products EFFECTS]');
    }

    getProducts$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(ProductsActions.getProducts),
            switchMap(action =>
                this.prodServ.getProducts().pipe(
                    map(products => ProductsActions.getProductsSuccess({ products })),
                    catchError(error => of(ProductsActions.getProductsError({ error })))
                )
            )
        )
    );

}
