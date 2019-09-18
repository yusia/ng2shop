import { ProductModel } from '../models/product.model';
import { Injectable } from '@angular/core';
import { Size } from '../models/Size.enum';
import { Observable, of, throwError } from 'rxjs';
import { concatMap, catchError, retry } from 'rxjs/operators';
import {
    HttpClient,
    HttpHeaders,
    HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';
import { ConfigOptionsService } from 'src/app/core/services/config-options.service';

@Injectable()
export class ProductService {
    private productsUrl;
    constructor(private http: HttpClient, private configServ: ConfigOptionsService) {
        this.productsUrl = configServ.getProductsUrl();
    }
    getProducts(): Observable<ProductModel[]> {
        return this.http.get<ProductModel[]>(this.productsUrl)
            .pipe(
                retry(3),
                catchError(this.handleError)
            );
    }

    getProduct(id: number): Observable<ProductModel> {
        const url = `${this.productsUrl}/${id}`;
        return this.http.get<ProductModel>(url)
            .pipe(
                retry(3),
                catchError(this.handleError)
            );
    }

    deleteProduct(id: number): Observable<ProductModel[]> {
        const url = `${this.productsUrl}/${id}`;
        return this.http.delete(url)
            .pipe(concatMap(() => this.getProducts()));
    }


    update(product: ProductModel): Observable<ProductModel> {
        const url = `${this.productsUrl}/${product.id}`;
        const body = JSON.stringify(product);
        const options = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };

        return this.http
            .put<ProductModel>(url, body, options)
            .pipe(catchError(this.handleError));

    }

    create(product: ProductModel): Observable<ProductModel> {

        const url = `${this.productsUrl}`;
        const body = JSON.stringify(product);
        const options = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };

        return this.http
            .post<ProductModel>(url, body, options)
            .pipe(catchError(this.handleError));
    }



    private handleError(err: HttpErrorResponse) {
        // A client-side or network error occurred.
        if (err.error instanceof Error) {
            console.error('An error occurred:', err.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(`Backend returned code ${err.status}, body was: ${err.error}`);
        }

        return throwError('Something bad happened; please try again later.');
    }

}
