import { Component, ViewChild, AfterViewInit, ElementRef, OnInit, DoCheck } from '@angular/core';

import { ProductModel } from './feature/product/models/product.model';
import { Router, RouterOutlet } from '@angular/router';
import { CartService } from './feature/cart/services/cart.service';
import { CustomPreloadingStrategyService } from './core/custom-preloading-strategy.service';
import { ConfigOptionsService } from './core/services/config-options.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck, AfterViewInit {
  @ViewChild('appTitle') appTitle: ElementRef;
  count = 0;

  constructor(private cartService: CartService,
              private router: Router,
              private preloadingStrategy: CustomPreloadingStrategyService,
              private appSettingsService: ConfigOptionsService
  ) {
  }
  ngOnInit() {
    this.appSettingsService.loadAppConfig();

    console.log(
      `Preloading Modules: `,
      this.preloadingStrategy.preloadedModules
    );

  }
  ngDoCheck() {
    this.count = this.cartService.getCount();
  }
  onActivate($event: any, routerOutlet: RouterOutlet) {
    console.log('Activated Component', $event, routerOutlet);
  }

  onDeactivate($event: any, routerOutlet: RouterOutlet) {
    console.log('Deactivated Component', $event, routerOutlet);
  }

  ngAfterViewInit() {
    this.appTitle.nativeElement.innerHTML = 'Friend!';
  }
  onBuy(prod: ProductModel): void {
    this.cartService.buy(prod);
    this.count = this.cartService.getCount();
    console.log('buy');
  }

  get prodInCarCount() {
    return this.cartService.getProductsInCartObserv.length;
  }
}
