import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private _authService : AuthService, private _router: Router) { }

  ngOnInit(): void {
  }

  login(username : any, password : any) {

     console.log(username, password);
     
    var result = this._authService.checkUsernameAndPassword(username, password);

     if (result == true) {

      window.alert('login successfully!');

      // navigate home
     this._router.navigate(['home']);
    
     } else {

      window.alert('invalid username and password');

      this._router.navigate(['login']);
     }
    }
}
