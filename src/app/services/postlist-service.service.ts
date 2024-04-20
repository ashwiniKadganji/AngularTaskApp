import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostlistServiceService {


  private apiurl = 'https://jsonplaceholder.typicode.com'

  constructor(private _httpClient: HttpClient) { }

  
  getPost(): Observable<any>{
    return this._httpClient.get(`${this.apiurl}/posts`);
  }

  getPostById(id: any): Observable<Post>{
    return this._httpClient.get<Post>(`${this.apiurl}/posts/`+ id);
  }

}
