import { Component, OnInit, Input, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';

import { ProductModel } from '../../models/product.model';
import { ActivatedRoute, Router, UrlTree } from '@angular/router';
import { ProductService } from '../../service/products.service';
import { pluck } from 'rxjs/operators';
import { Subscription } from 'rxjs';

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
        private productService: ProductService) { }

    ngOnInit() {
        this.activeRouter.data.pipe(pluck('product')).subscribe((product: ProductModel) => {
            this.product = { ...product };
        });

    }

    ngOnDestroy(): void {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }

    onSave(prodId: number): void {
        const product = { ...this.product };
        const method = product.id > 0 ? 'update' : 'create';
        this.sub = this.productService[method](product).subscribe(
            savedProd => {
                this.originalProduct = { ...savedProd };
                this.onGoBack();
            },
            error => console.log(error)

        );
        this.onGoBack();
    }

    onGoBack() {
        this.location.back();
    }
}
