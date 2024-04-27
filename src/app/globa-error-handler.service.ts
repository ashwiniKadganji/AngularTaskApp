import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobaErrorHandlerService implements ErrorHandler{

  constructor() { }

  handleError(error: any): void {
    // debugger;
  //  console.error('an error occured', error.message);
   //you can log this error in db
   //we can store this error in any physically place

  }
}
