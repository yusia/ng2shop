import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

import { ProductModel } from '../../models/product.model';
import { ActivatedRoute, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from '../../service/products.service';
import { pluck } from 'rxjs/operators';

@Component({
  templateUrl: './product-details.component.html',
  providers: [ProductService]
})
export class ProductDetailsComponent implements OnInit {
  product: ProductModel;
  constructor(private router: Router, private activeRouter: ActivatedRoute) {}

  ngOnInit() {
    console.log(this.product);
    this.activeRouter.data
      .pipe(pluck('product'))
      .subscribe((product: ProductModel) => {
        this.product = { ...product };
        this.router.navigate([
          { outlets: { feedbacks: ['feedbacks', this.product.id] } }
        ]);
      });
  }

  onDisplayFeedbacks(prodId: number): void {
    // this.router.navigate([{ outlets: { feedbacks: ['/feedbacks', prodId] } }]);
    this.router.navigateByUrl(
      `/details/${prodId}/(feedbacks:feedbacks/${prodId})`
    );
  }
}
