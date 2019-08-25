import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent, ProductComponent, FeedbacksComponent } from './components';
import { ProductResolveGuard } from './guards/product-resolve.guard';

const routes: Routes = [
  {
    path: 'home',
    component: ProductListComponent
  },{
    path:'details/:productID',
    resolve: {
      product: ProductResolveGuard
    },
    component: ProductComponent
  },{// не работает =(())
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
