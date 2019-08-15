import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductModule } from './feature/product/product.module';
import { CartModule } from './feature/cart/cart.module';
import { AboutComponent } from './layout/about/about.component';
import { CoreModule } from './core/core.module';
import { WaySizeDirective } from './shared/directives/waySize.directive';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    WaySizeDirective // <-- Почему бы не зарегистрировать в SharedModule?
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    CartModule,
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
