import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterPipeServiceService {

  constructor(private _httpCient: HttpClient) { }

  getUsers(): Observable<any>{
     return this._httpCient.get('https://jsonplaceholder.typicode.com/users');
  }

  
}
