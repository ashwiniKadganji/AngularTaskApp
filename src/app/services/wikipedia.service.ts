import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
  private apiUrl = 'https://en.wikipedia.org/w/api.php';

  constructor(private _httpClient: HttpClient) { }

  search(query: string): Observable<any> {
    const params = {
      action: 'query',
      format: 'json',
      list: 'search',
      utf8: '1',
      srsearch: query,
      origin: '*'
    };
    return this._httpClient.get(this.apiUrl, { params });
  }

}
