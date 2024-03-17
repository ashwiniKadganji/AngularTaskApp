import { Component, OnInit } from '@angular/core';
import { RapidapiService } from 'src/app/services/rapidapi.service';

@Component({
  selector: 'app-rapidapi',
  templateUrl: './rapidapi.component.html',
  styleUrls: ['./rapidapi.component.css']
})
export class RapidapiComponent implements OnInit {


  newsData!: any[] ;
  quotesData: any[] | undefined;
 // inject the RapidApiService in constructor level
// RapidapiComponent depend on RapidApiService
constructor(private _rapidApiService : RapidapiService) { }
// once my component has been initlize by  default call the ngOnInit method
  ngOnInit(): void {

    // call getYahooFinance method here

    this._rapidApiService.getYahooFinance().subscribe(res => {
      console.log('Rapid get called!!', res);
      this.newsData = res.news;
      this.quotesData = res.quotes;
    })
  }

}
