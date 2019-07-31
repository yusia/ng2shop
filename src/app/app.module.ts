import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductModule } from './feature/product/product.module';
import { CartModule } from './feature/cart/cart.module';
import { AboutComponent } from './layout/about/about.component';
import { CoreModule } from './core/core.module';
import { WaySizeDirective } from './shared/directives/waySize.directive';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    WaySizeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    CartModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
