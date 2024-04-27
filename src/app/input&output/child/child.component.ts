import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


  @Input() childMessage!: string;
  @Input() childMessage1!: string;

  @Output() messageToParent = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {

    console.log('called ngOnInit',this.childMessage);
    console.log('called ngOnInit1',this.childMessage1);  
  }

  sendMsg() {
    this.messageToParent.emit('Yes,I have done my homeWork everyday :-) (^_^) ');
    
    }

}
