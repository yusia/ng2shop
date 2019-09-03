import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { AboutComponent, PathNotFoundComponent } from './layout';
import { CartComponent } from './feature/cart/cart.component';
import { CustomPreloadingStrategyService } from './feature/core/custom-preloading-strategy.service';
import { OrderFormComponent } from './feature/order/components/order-form/order-form.component';

const extraOptions: ExtraOptions = {
  preloadingStrategy: CustomPreloadingStrategyService,
  enableTracing: true // Makes the router log all its internal events to the console.
};

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'product',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'cart',
    loadChildren: () => import('./feature/cart/cart.module').then(m => m.CartModule),
    data: {
      preload: true
    }
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

