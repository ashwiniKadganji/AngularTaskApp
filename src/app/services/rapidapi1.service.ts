import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RapidapiService {

 apiUrl = 'https://yh-finance.p.rapidapi.com/stock/get-fundamentals';

  constructor(private http: HttpClient) { }

  getYahooFinanceStock(): Observable<any>{

   let params = new HttpParams();

    params = params.append('symbol','AMRN');
    params = params.append('region','US');
    params = params.append('lang', 'en-US');
    params = params.append('modules','assetProfile,summaryProfile,fundProfile');

    let headers = new HttpHeaders({
       'x-rapidapi-key': '31a7304111msh1abc9c37df6b00cp1616b3jsn853734b6cb7d',
       'x-rapidapi-host': 'yh-finance.p.rapidapi.com'
  
     });

     const options = {
      params : params,
      headers : headers
     }

    return this.http.get(this.apiUrl,options)
  }
}
