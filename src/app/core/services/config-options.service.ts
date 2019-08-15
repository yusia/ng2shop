import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {
  private tempConfigStorage: any;
  constructor() {}
  // configOptions - это массив?
  setConfig(...configOptions): void {
    // может так?
    // this.tempConfigStorage = {...this.tempConfigStorage, ...configOptions};
    for (const key in configOptions) {
      this.tempConfigStorage[key] = configOptions[key];
    }
  }

  getConfig(): any {
    return this.tempConfigStorage;
  }
}
