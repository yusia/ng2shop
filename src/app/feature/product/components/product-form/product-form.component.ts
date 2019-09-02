import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Location } from '@angular/common';

import { ProductModel } from '../../models/product.model';
import { ActivatedRoute, Router, UrlTree } from '@angular/router';
import { ProductService } from '../../service/products.service';
import { pluck } from 'rxjs/operators';

@Component({
    templateUrl: './product-form.component.html',
    providers: [ProductService]
})
export class ProductFormComponent implements OnInit {
    product: ProductModel;
    constructor(
        private location: Location,
        private router: Router,
        private activeRouter: ActivatedRoute,
        private productService: ProductService) { }

    ngOnInit() {
        console.log(this.product);
        this.activeRouter.data.pipe(pluck('product')).subscribe((product: ProductModel) => {
            this.product = { ...product };
        });

    }

    onSave(prodId: number): void {
        const product = { ...this.product };
        const method = product.id ? 'update' : 'create';
        this.productService[method](product);
        this.location.back();
    }

    onGoBack() {
        this.location.back();
    }
}
