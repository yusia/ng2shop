import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProductModel } from '../models/product.model';
import { ProductService } from '../service/products.service';
import { map, delay, finalize, catchError, take } from 'rxjs/operators';
import { Size } from '../models/Size.enum';
import { Store,select } from '@ngrx/store';
import { AppState, selectSelectedProductByUrl } from 'src/app/core/@ngrx';
import * as RouterActions from 'src/app/core/@ngrx/router/router.actions';
@Injectable({
  providedIn: 'root'
})
export class ProductResolveGuard implements Resolve<ProductModel> {
  constructor(
    private productService: ProductService,
    private store: Store<AppState>,
    private router: Router,
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ProductModel | null> {
    console.log('Resolve Guard is called');

    return this.store.pipe(
      select(selectSelectedProductByUrl),
      map((product: ProductModel) => {
        if (product) {
          return product;
        } else {
          this.store.dispatch(RouterActions.go({
            path: ['/products']
          }));
          return null;
        }
      }),
      take(1),
      catchError((error) => {
        this.store.dispatch(RouterActions.go({
          path: ['/products']
        }));
        // catchError MUST return observable
        return of(null);
      })
    );
  }

}
