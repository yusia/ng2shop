import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { AboutComponent, PathNotFoundComponent } from './layout';
import { CartComponent } from './feature/cart/cart.component';
import { CustomPreloadingStrategyService } from './core/custom-preloading-strategy.service';
import { OrderFormComponent } from './feature/order/components/order-form/order-form.component';
import { LoginComponent } from './layout/components/login/login.component';
import { AuthGuard } from './core/guard/auth.guard';
import { AdminComponent } from './feature/admin/admin.component';

const extraOptions: ExtraOptions = {
  preloadingStrategy: CustomPreloadingStrategyService,
  enableTracing: true // Makes the router log all its internal events to the console.
};

const routes: Routes = [
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'cart',
    loadChildren: () => import('./feature/cart/cart.module').then(m => m.CartModule),
    data: {
      preload: true
    }
  },
  {
    path: 'admin',
  // canLoad: [AuthGuard],
    loadChildren: () => import('./feature/admin/admin.module').then(m => m.AdminModule),
    
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'order',
    component: OrderFormComponent
  },
  {
    // The router will match this route if the URL requested
    // doesn't match any paths for routes defined in our configuration
    path: '**',
    component: PathNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

