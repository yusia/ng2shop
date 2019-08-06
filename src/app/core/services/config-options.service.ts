import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {
 private tempConfigStorage: any;
  constructor() { }
  setConfig(...configOptions): void {
    for (const key in configOptions) {

           this.tempConfigStorage[key] = configOptions[key];
    }
  }

  getConfig(): any {
      return this.tempConfigStorage;
  }
}