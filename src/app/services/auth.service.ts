import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private _router: Router) { }

  checkUsernameAndPassword(username : any, password : any){
    
       if (username == 'Angular' && password == '123456') {
         sessionStorage.setItem('tokenkey','admin');
           return true
       } else {
           return false
       }
  }
    
  logout(): void{
     // Clear any user authentication state or tokens
    sessionStorage.removeItem('tokenkey');
    sessionStorage.clear();
    // Redirect to login page
    this._router.navigate(['/login']);
  }

  
  
}

