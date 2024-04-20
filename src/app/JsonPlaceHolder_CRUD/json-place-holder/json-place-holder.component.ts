import { Component, OnInit } from '@angular/core';
import { JsonPlaceHolderService } from 'src/app/services/json-place-holder.service';

@Component({
  selector: 'app-json-place-holder',
  templateUrl: './json-place-holder.component.html',
  styleUrls: ['./json-place-holder.component.css']
})
export class JsonPlaceHolderComponent implements OnInit {
  datas!: any[];
  pics!: any[];

  constructor(private _jsonPlaceService : JsonPlaceHolderService) { }

  ngOnInit(): void {

    this._jsonPlaceService.getData().subscribe(res =>{
      console.log(res);
      this.datas = res;
    })

    this._jsonPlaceService.getPhotos().subscribe(photos =>{
      console.log(photos);
      this.pics = photos;
    })
  }

}
