import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {


  isShow : boolean = false;
 isLoggedIn : boolean = false;
 isDisplay : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  

}
