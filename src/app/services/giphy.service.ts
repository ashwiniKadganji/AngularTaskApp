import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  private apiUrl = 'https://api.giphy.com/v1/gifs/trending?api_key=jd3PQeuBA7xplOtAWRYiUIdlYAMwIKif&limit=50&offset=0&rating=g&bundle=messaging_non_clips';

  constructor(private _httpClient: HttpClient) { }

  getGiphy(offset: number = 0, limit: number = 10):Observable<any>{

    //  const headers = {
    //   'X-RapidAPI-Key': 'jd3PQeuBA7xplOtAWRYiUIdlYAMwIKif',
      
    //  }
    return this._httpClient.get(`${this.apiUrl}&offset=${offset}&limit=${limit}`);
  }
  searchGifs(query: string): Observable<any> {
    return this._httpClient.get(`${this.apiUrl}`);
  }
}
