import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable,of } from 'rxjs';
import { ProductModel } from '../models/product.model';
import { ProductService } from '../service/products.service';
import { map, delay, finalize, catchError, take } from 'rxjs/operators';
import { Size } from '../models/Size.enum';
@Injectable({
  providedIn: 'root'
})
export class ProductResolveGuard implements Resolve<ProductModel> {
  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ProductModel | null> {
    console.log('Resolve Guard is called');

    if (!route.paramMap.has('productID')) {
      return of(new ProductModel(-1,null, '',0,Size.unknown,0));
    }

    const id = +route.paramMap.get('productID');

    return this.productService.getProduct(id).pipe(
      map((product: ProductModel) => {
        if (product) {
          return product;
        } else {
          this.router.navigate(['/products']);
          return null;
        }
      }),
      take(1),
      catchError(() => {
        this.router.navigate(['/products']);
        // catchError MUST return observable
        return of(null);
      })
    );
  }

}
