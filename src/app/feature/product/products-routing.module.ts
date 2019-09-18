import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent, ProductComponent, FeedbacksComponent } from './components';
import { ProductResolveGuard } from './guards/product-resolve.guard';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductListComponent,

  }, {
    path: 'details/:productID',
    resolve: {
      product: ProductResolveGuard
    },
    component: ProductDetailsComponent
  }, {// не работает =(())
    path: 'feedbacks/:prodID',
    component: FeedbacksComponent,
    outlet: 'feedbacks'
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
