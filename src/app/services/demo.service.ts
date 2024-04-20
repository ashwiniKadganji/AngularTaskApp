import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(private _httpClient: HttpClient) { }

  getUsers(): Observable<any[]> {
    return this._httpClient.get<any[]>('https://jsonplaceholder.typicode.com/users');
  }

  getPosts(): Observable<any[]> {
    return this._httpClient.get<any[]>('https://jsonplaceholder.typicode.com/posts');
  }

  // getPostById(id: any): Observable<Post> {
  //   return this._httpClient.get<Post>('http://jsonplaceholder.typecode.com/posts/' +id);
  // }
}
