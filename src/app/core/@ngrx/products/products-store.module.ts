import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// @NgRx
import { StoreModule } from '@ngrx/store';
import { productsReducer } from './products.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from "./ProductsEffects";
import { ProductService } from 'src/app/feature/product/service/products.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('products', productsReducer),
    EffectsModule.forFeature([ProductsEffects])
  ],
  providers: [ProductService]
})
export class ProductsStoreModule { }
