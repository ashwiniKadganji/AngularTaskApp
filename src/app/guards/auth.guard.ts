import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _router:Router) {}

  canActivate():boolean {
    if (sessionStorage.getItem('tokenkey') != null) {
      return true;
    }else{
      this._router.navigate(['/login']);
      return false;
    }
   
  }
  
}
