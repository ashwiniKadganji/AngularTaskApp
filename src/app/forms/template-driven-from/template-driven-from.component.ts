import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-from',
  templateUrl: './template-driven-from.component.html',
  styleUrls: ['./template-driven-from.component.css']
})
export class TemplateDrivenFromComponent implements OnInit {
firstName: any;


  constructor() { }

  ngOnInit(): void {
  }
  OnSubmit(form: NgForm) {
    console.log(form);
    
    }
}
