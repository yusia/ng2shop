import { Component, OnInit, InjectionToken, Inject, Optional } from '@angular/core';
import { ConstantsService } from 'src/app/core/services/constants.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { ConfigOptionsService } from 'src/app/core/services/config-options.service';
import { String64, GeneratorFactory } from 'src/app/core/services/generator.factory';
import { GeneratorService } from 'src/app/core/services/generator.service';

const NAME = new InjectionToken<string>('ALMI');
const AboutShopStorageValue = new ConstantsService();


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [
    { provide: ConstantsService, useValue: AboutShopStorageValue },
    { provide: LocalStorageService, useClass: LocalStorageService },
    { provide: ConfigOptionsService, useClass: ConfigOptionsService },
    { provide: NAME, useValue: 'Friends shop' },
    { provide: String64, useFactory: GeneratorFactory(64), deps: [GeneratorService] }
  ]
})
export class AboutComponent implements OnInit {
  lastVisit: any;
  constructor(@Inject(NAME) public name: string,
    private aboutSrv: ConstantsService,
    @Optional() private confg: ConfigOptionsService,
    @Inject(String64) public shopUniqNumber: string,
    @Optional() private myStorage: LocalStorageService) {
  }

  ngOnInit() {
    let lastVisitDate=this.myStorage.getItem("lastVisitDate");
    if(lastVisitDate===null){
      this.myStorage.setItem("lastVisitDate",Date.now());
    }
    this.lastVisit=Date(lastVisitDate); 

  }

}
