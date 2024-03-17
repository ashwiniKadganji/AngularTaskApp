import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RapidapiService {

  apiUrl = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete';
  // onject the httpclient to make htttp request
  constructor(private httpClient: HttpClient) { }

  getYahooFinance() : Observable<any>{
    // create new HttpParams object
   let params = new HttpParams();
   // append parameters
    params = params.append('q' ,'tesla');
    params = params.append('region' ,'US');

    // creating new HttpHeader object

    let headers = new HttpHeaders({
      'X-RapidAPI-Key': '31a7304111msh1abc9c37df6b00cp1616b3jsn853734b6cb7d',
      'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
    });

    // adding HttpParams and HttpHeaders to options
     const options = {
      headers : headers,
      params :  params
     }
    return this.httpClient.get(this.apiUrl,options);
  }
}
