import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductService } from './service/products.service';
import { ProductComponent, ProductListComponent } from './components';
import { ProductsRoutingModule } from './products-routing.module';
import { FeedbacksComponent } from './components/feedbacks/feedbacks.component';
import { ProductFeedbackService } from './service/products-feedback.service';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

@NgModule({
  imports: [CommonModule, ProductsRoutingModule],
  declarations: [
    ProductDetailsComponent,
    ProductComponent,
    ProductListComponent,
    FeedbacksComponent],
  providers: [ProductService, ProductFeedbackService],
  exports: [ProductComponent, ProductListComponent]
})
export class ProductModule { }
