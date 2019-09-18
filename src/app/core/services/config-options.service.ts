import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { concatMap, catchError, retry, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {
  private appConfig: any;
  private defaultSettings = { productsUrl: 'http://localhost:3000/products' };
  constructor(private customLocalStorage: LocalStorageService,
    private http: HttpClient) {
  }


  loadAppConfig() {
    return this.http.get('/assets/app-settings.json').pipe(
      map(data => {
        this.appConfig = data;
        this.customLocalStorage.setItem("config", data);
      }),
      retry(2),
      catchError(this.handleError)
    )
  }

  getConfig(): any {
    let config = localStorage.getItem("config");
    if (config) {
      return config;
    }
    else {
      return this.appConfig;
    }

  }
  getProductsUrl(): any {
    let config = this.customLocalStorage.getItem("config");
    if (config) {
      return config["productsUrl"];
    }
    else {
      this.loadAppConfig().subscribe(sub=>{
        return this.appConfig.productsUrl;         
      })
    }

  }
  private handleError(err: HttpErrorResponse) {
    this.appConfig = this.defaultSettings;

    if (err.error instanceof Error) {
      console.error('An error occurred:', err.error.message);
    } else {
      console.error(`Backend returned code ${err.status}, body was: ${err.error}`);
    }

    return throwError('Something bad happened; please try again later.');
  }
}
