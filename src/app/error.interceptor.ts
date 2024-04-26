import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(

      catchError(this.errorHandler)
    )
  }

  private errorHandler(error: any):Observable<any>{
      
    if (error.error instanceof ErrorEvent) {
      
    // clent side or n/w side error occured we can handle this error

    console.error('an error occured', error.message);
    }else{

      // backend return an unsuccessful error

      console.log('custom error occured',error.error.message);

      console.error(`Backend return error ${error.status},body was: ${error.error.message}`);
      
    }
    return throwError(error);
  }
}
