import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {


  date = new Date();
  fullName = 'jack sparrow'
  FirstName = 'JACK SPARROW';
  day = 'mOnDAy';
  price : number = 17000;
  Discount : number = 12.34500;
  discount : number = 1;
  constructor() { }

  ngOnInit(): void {
  }

}
