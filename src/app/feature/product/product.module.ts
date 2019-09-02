import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { ProductService } from './service/products.service';
import { ProductComponent, ProductListComponent } from './components';
import { ProductsRoutingModule } from './products-routing.module';
import { FeedbacksComponent } from './components/feedbacks/feedbacks.component';
import { ProductFeedbackService } from './service/products-feedback.service';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

@NgModule({
  imports: [CommonModule, ProductsRoutingModule, FormsModule],
  declarations: [
    ProductDetailsComponent,
    ProductComponent,
    ProductListComponent,
    FeedbacksComponent,
    ProductFormComponent],
  providers: [ProductService, ProductFeedbackService],
  exports: [ProductComponent, ProductFormComponent, ProductListComponent]
})
export class ProductModule { }
