import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from './../../../environments/environment';
import { EffectsModule } from '@ngrx/effects';

import { StoreRouterConnectingModule, RouterState } from '@ngrx/router-store';
import { routerReducers, CustomSerializer, RouterEffects } from './router';
import { ProductsStoreModule } from './products/products-store.module';




@NgModule({
  imports: [
    StoreModule.forRoot(routerReducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        // router state is not serializable
        // set false if you don't use CustomSerializer
        strictStateSerializability: true,
        // router action is not serializable
        // set false
        strictActionSerializability: false
      }
    }),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
      routerState: RouterState.Minimal
      // serializer: CustomSerializer // has a priority over routerState
    }),
    EffectsModule.forRoot([RouterEffects]),
    // Instrumentation must be imported after importing StoreModule (config is optional) 
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    ProductsStoreModule
  ]
})
export class RootStoreModule {

}

