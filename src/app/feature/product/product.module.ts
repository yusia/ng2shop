import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductService } from '../shared/services/products.service';
import { ProductComponent,ProductListComponent } from './components';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  imports: [CommonModule,ProductsRoutingModule],
  declarations: [ProductComponent, ProductListComponent],
  providers: [ProductService],
  exports: [ProductComponent, ProductListComponent]
})
export class ProductModule { }
