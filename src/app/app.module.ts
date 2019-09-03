import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductModule } from './feature/product/product.module';
import { CartModule } from './feature/cart/cart.module';
import { CoreModule } from './core/core.module';
import { WaySizeDirective } from './shared/directives/waySize.directive';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';

import { Router } from '@angular/router';
import { AdminModule } from './feature/admin/admin.module';
import { OrderModule } from './feature/order/order.module';

@NgModule({
  declarations: [
    AppComponent,
    WaySizeDirective,
    
  ],
  imports: [
    BrowserModule,
    ProductModule,
    CartModule,
    CoreModule,
    SharedModule,
    LayoutModule,
    AdminModule,
    OrderModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(router: Router) {
    const replacer = (key: string, value: any): string =>
      typeof value === 'function' ? value.name : value;

    console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
}

}
