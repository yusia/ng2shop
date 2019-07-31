import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {
  constructor() { }

  getData(): string {
    return 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  }
}
