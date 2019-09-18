import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpParams, HttpEventType } from '@angular/common/http';

import { Observable } from 'rxjs';
import { filter, map, finalize } from 'rxjs/operators';

@Injectable()
export class TimingInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const started = Date.now();


    return next.handle(req).pipe(
      filter((event: HttpEvent<any>) => event.type === HttpEventType.Response),
      map((event: HttpResponse<any>) => {
        // do stuff with response
        if (event.url.includes('products') && event.status === 201) {
          const elapsed = Date.now() - started;
          const msg = `${req.method} "${req.urlWithParams}" take ${elapsed} ms.`;
          console.log(msg);
          return event;
        }
      })
    )
  }
}
