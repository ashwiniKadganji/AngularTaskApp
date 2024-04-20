import { Component, OnInit } from '@angular/core';
import { NgForm, RequiredValidator } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  
formData = {
  fullName : '',
  birthDate : '',
  address :'',
  city : '',
  state : '',
  zipcode :'',
  country: '',
  phone : '',
  email: '',
  course:'',
  comment: ''
}
  myForm!: NgForm;


  constructor() {
    // this.myForm = new NgForm();
   }

  ngOnInit(): void {
  }


  OnSubmit(res : NgForm) {
          console.log('tdf',res.value);

    }
}
