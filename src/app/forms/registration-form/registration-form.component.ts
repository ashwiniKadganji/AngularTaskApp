import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }


  OnSubmit(res : NgForm) {
          console.log('tdf',res.value);

    }
}
