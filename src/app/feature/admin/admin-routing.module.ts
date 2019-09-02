import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ManageOrdersComponent, ManageProductsComponent, AdminDashboardComponent } from '.';
import { ProductResolveGuard } from '../product/guards/product-resolve.guard';
import { ProductFormComponent } from '../product/components/product-form/product-form.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        children: [
          {
            path: 'products',
            component: ManageProductsComponent,
            children: [{
              path: 'edit/:productID',
              resolve: {
                product: ProductResolveGuard
              },
              component: ProductFormComponent,
            }]
          }
          ,
          { path: 'orders', component: ManageOrdersComponent },
          { path: '', component: AdminDashboardComponent }
        ]
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {

  static components = [
    AdminComponent,
    AdminDashboardComponent,
    ManageProductsComponent,
    ManageOrdersComponent
  ];

}
