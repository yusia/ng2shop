import { Injectable } from '@angular/core';

@Injectable(    )
export class LocalStorageService {

    setItem(key: string, data: any): void {
        try {
          localStorage.setItem(key, JSON.stringify(data));
        } catch (e) {
          console.error('Error saving to localStorage', e);
        }
      }

      getItem(key: string) {
        try {
          return JSON.parse(localStorage.getItem(key));
        } catch (e) {
          console.error('Error getting data from localStorage', e);
          return null;
        }
      }

      removeItem(key: string) {
        if (this.getItem(key)) {
            localStorage.removeItem(key);
        }
      }
}
