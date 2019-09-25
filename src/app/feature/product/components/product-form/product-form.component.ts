import { Component, OnInit, Input, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';

import { ProductModel } from '../../models/product.model';
import { ActivatedRoute, Router, UrlTree } from '@angular/router';
import { ProductService } from '../../service/products.service';
import { pluck } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState, selectSelectedProductByUrl } from 'src/app/core/@ngrx';
import * as RouterActions from 'src/app/core/@ngrx/router/router.actions';

@Component({
    templateUrl: './product-form.component.html',
    providers: [ProductService]
})
export class ProductFormComponent implements OnInit, OnDestroy {
    product: ProductModel;
    originalProduct: ProductModel;
    private sub: Subscription;

    constructor(
        private location: Location,
        private router: Router,
        private activeRouter: ActivatedRoute,
        private productService: ProductService,
        private store: Store<AppState>) { }

    ngOnInit() {
        this.sub = this.store.pipe(select(selectSelectedProductByUrl))
        .subscribe(product => this.product = {...product});
        // this.activeRouter.data.pipe(pluck('product')).subscribe((product: ProductModel) => {
        //     this.product = { ...product };
        // });

    }

    ngOnDestroy(): void {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }

    onSave(prodId: number): void {
        const product = { ...this.product };
        const method = product.id !== null ? 'update' : 'create';
        this.sub = this.productService[method](product).subscribe(
            savedProd => {
                this.originalProduct = { ...savedProd };
                this.onGoBack();
            },
            error => console.log(error)

        );
    }

    onGoBack() {
        this.store.dispatch(RouterActions.back());
        //this.location.back();
    }
}
