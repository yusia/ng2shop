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

const productsList = [
    new ProductModel(5, 'American Shorthair Cat',
        '2',
        799,
        Size.medium, 1),
    new ProductModel(1, 'Russian Blue Cat Breed',
        'The Russian Blue is gentle, quiet and even shy around strangers; She’s tolerant of children and other cat-friendly pets.',
        699,
        Size.large, 2),
    new ProductModel(2, 'American Shorthair Cat3',
        '3',
        799,
        Size.medium, 3),
    new ProductModel(3, 'American Shorthair Cat2',
        'American Shorthair Cat32',
        799,
        Size.medium, 0),
];
const productsListObservable: Observable<Array<ProductModel>> = of(productsList);
@Injectable()
export class ProductService {

    private productsUrl = 'http://localhost:3000/products';

    private products;
    constructor(private http: HttpClient) {
    }
    getProducts(): Observable<ProductModel[]> {
        return this.http.get<ProductModel[]>(this.productsUrl)
            .pipe(
                retry(3),
                catchError(this.handleError)
            );
    }

    getProduct(id: number): Observable<ProductModel> {
        let url = `${this.productsUrl}/${id}`;
        return this.http.get<ProductModel>(url)
            .pipe(
                retry(3),
                catchError(this.handleError)
            );
    }

    deleteProduct(id: number): Observable<ProductModel[]>  {
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
       
        const url = `${this.productsUrl}/${product.id}`;
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
