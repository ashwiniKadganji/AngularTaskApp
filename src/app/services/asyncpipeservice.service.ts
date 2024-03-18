import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsyncpipeserviceService {

  constructor() { }

  getnumbers(){
  
    return of([1,2,3,4,5,6,7]).pipe(delay(1000))
   }

  
   fetchData(): Promise<string[]> {
    return new Promise((resolve, reject) => {
      // Simulating asynchronous data fetching
      setTimeout(() => {
        const data = ['Mango', 'Banana', 'Strawbery', 'Grapes'];
        resolve(data);
      }, 2000); // Simulated delay of 2 seconds
    });
  }
   
}
