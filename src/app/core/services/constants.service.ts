import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {
  App: string = "TaskManager";
  Ver: string = "1.0";
  constructor() { }
}
