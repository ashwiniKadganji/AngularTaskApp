import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private apiUrl = 'http://localhost:3000/todos';

  constructor(private _httpClient:HttpClient) { }

  createTodo(data: any): Observable<any>{
    return this._httpClient.post(this.apiUrl,data);
  }

  getTodo():Observable<any>{
    return this._httpClient.get(this.apiUrl);
  }

  updateTodo(id: any,data: any):Observable<any>{
    let API_URL =`${this.apiUrl}/${id}`;

    return this._httpClient.put(API_URL,data);
  }

  deleteTodo(id:any):Observable<any>{
    let API_URL =`${this.apiUrl}/${id}`;

    return this._httpClient.delete(API_URL);
  }
}
