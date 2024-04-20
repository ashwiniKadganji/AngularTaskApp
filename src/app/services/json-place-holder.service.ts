import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonPlaceHolderService {

  private apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private _httpClient : HttpClient) { }

  getData(): Observable<any>{
      return this._httpClient.get(`${this.apiUrl}/users`);
  }

  getPhotos(): Observable<any>{
   return this._httpClient.get(`${this.apiUrl}/photos`)
  }
}
