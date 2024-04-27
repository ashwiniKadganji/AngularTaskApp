import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // console.log(' from HttpInterceptor',request);

    const myRequest = request.clone({
        
      setHeaders: {
        'X-RapidAPI-Key' : '31a7304111msh1abc9c37df6b00cp1616b3jsn853734b6cb7d',
        'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
      },

    });
    
    
    return next.handle(myRequest);
  }
}
