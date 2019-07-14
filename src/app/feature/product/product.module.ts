import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductService } from './services/products.service';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ProductComponent, ProductListComponent],
  providers: [ProductService],
  exports: [ProductComponent, ProductListComponent]
})
export class ProductModule { }
