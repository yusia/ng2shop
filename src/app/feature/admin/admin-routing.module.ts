import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ManageOrdersComponent, ManageProductsComponent, AdminDashboardComponent } from '.';
import { ProductResolveGuard } from '../product/guards/product-resolve.guard';
import { ProductFormComponent } from '../product/components/product-form/product-form.component';
import { AuthGuard } from './../../core/guard/auth.guard';
const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'managingproducts',
        component: ManageProductsComponent
      },
      {
        path: 'managingproducts/edit/:productID',
        resolve: {
          product: ProductResolveGuard
        },
        component: ProductFormComponent,
      }, {
        path: 'managingproducts/add',
        resolve: {
          product: ProductResolveGuard
        },
        component: ProductFormComponent,
      }
      ,
      { path: 'orders', component: ManageOrdersComponent },
      { path: '', component: AdminDashboardComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
  static components = [
    AdminComponent,
    AdminDashboardComponent,
    ManageProductsComponent,
    ManageOrdersComponent
  ];
}
