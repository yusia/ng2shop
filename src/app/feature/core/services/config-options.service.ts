import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {
 private _tempConfigStorage:any;
  constructor() { }
  setConfig(...configOptions):void{
    for (var key in configOptions) {
      this._tempConfigStorage[key]=configOptions[key];
    }
  }

  getConfig():any {
      return this._tempConfigStorage;
  }
}
