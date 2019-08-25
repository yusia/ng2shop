import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductService } from '../shared/services/products.service';
import { ProductComponent,ProductListComponent } from './components';
import { ProductsRoutingModule } from './products-routing.module';
import { FeedbacksComponent } from './components/feedbacks/feedbacks.component';
import { ProductFeedbackService } from './service/products-feedback.service';

@NgModule({
  imports: [CommonModule,ProductsRoutingModule],
  declarations: [ProductComponent, ProductListComponent, FeedbacksComponent],
  providers: [ProductService,ProductFeedbackService],
  exports: [ProductComponent, ProductListComponent]
})
export class ProductModule { }
