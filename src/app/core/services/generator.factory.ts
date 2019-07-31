import { Injectable, InjectionToken } from '@angular/core';
import { GeneratorService } from './generator.service';

export const String64 = new InjectionToken<any[]>('String64');

export function GeneratorFactory(length: number): any {
  return function (randomDataServise: GeneratorService): string {
    let result:string = '';
    var characters = randomDataServise.getData();
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
