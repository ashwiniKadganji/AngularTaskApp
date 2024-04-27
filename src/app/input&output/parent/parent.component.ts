import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {


  parentMessage: string = '1..You have to done your all homework everyday ';

  parentMessage1: string = '2..You have to do everyday one concept of javascript ';

  msg!: string;
  constructor() { }

  ngOnInit(): void {
  }

  receiveMsg(res: any) {
    console.log('from parent component:',res);
    this.msg = res;
    }

}
