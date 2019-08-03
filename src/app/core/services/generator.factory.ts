import { Injectable, InjectionToken } from '@angular/core';
import { GeneratorService } from './generator.service';

export const String64 = new InjectionToken<any[]>('String64');

export function GeneratorFactory(length: number): any {
  return (randomDataServise: GeneratorService): string => {
    let result = '';
    const characters = randomDataServise.getData();
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };
}
