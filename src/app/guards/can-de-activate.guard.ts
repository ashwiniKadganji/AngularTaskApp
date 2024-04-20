import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RegistrationFormComponent } from '../forms/registration-form/registration-form.component';

@Injectable({
  providedIn: 'root'
})
export class CanDeActivateGuard implements CanDeactivate<RegistrationFormComponent> {
  canDeactivate(component: RegistrationFormComponent):boolean {

    // if (component.myForm.dirty) {
    //   return confirm('You have Unsaved changes, are you sure want to navigate?')
    // }else{
    //   return true;
    // }
   
    //Use ternary operator
    return (component.myForm.dirty)? confirm ('You have Unsaved changes, Are you sure want to navigate?'):true;
  }
  
}
