import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart.component';
import { CartListComponent } from './components/cart-list/cart-list.component';

const routes: Routes = [
  {
    path: 'cart',
    component: CartComponent,
    children: [
    //   {
    //     path: 'add',
    //     component: CartFormComponent
    //   },
      // {
      //   path: 'delete/:userID',
      //     user: UserResolveGuard
      //   },
    //     component: UserFormComponent,
    //   },,
      {
        path: '',
        component: CartListComponent
      },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule {
  static components = [CartComponent, CartListComponent];
}

