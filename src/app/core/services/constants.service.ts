import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {
  App = 'TaskManager';
  Ver = '1.0';
  constructor() { }
}
