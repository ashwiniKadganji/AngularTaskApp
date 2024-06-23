import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-sitch',
  templateUrl: './ng-sitch.component.html',
  styleUrls: ['./ng-sitch.component.css']
})
export class NgSitchComponent implements OnInit {

  waether = 'rainy';
  constructor() { }

  ngOnInit(): void {
  }

}
