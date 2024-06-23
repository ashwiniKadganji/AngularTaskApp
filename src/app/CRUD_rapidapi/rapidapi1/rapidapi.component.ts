import { Component, OnInit } from '@angular/core';
import { RapidapiService } from '../rapidapi.service';

@Component({
  selector: 'app-rapidapi',
  templateUrl: './rapidapi.component.html',
  styleUrls: ['./rapidapi.component.css']
})
export class RapidapiComponent implements OnInit {

  datalist:  any[]=[];
  constructor(private _rapidapiService: RapidapiService) { }

  ngOnInit(): void {

    this._rapidapiService.getYahooFinanceStock().subscribe(res =>{
      console.log('rapidapi call',res);
      this.datalist = res.quoteSummary.result[0].assetProfile.
      companyOfficers;
    })
  }

}
