import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './smallApp/home/home.component';
import { AboutComponent } from './smallApp/about/about.component';
import { ContactComponent } from './smallApp/contact/contact.component';
import { PageNotFoundComponent } from './smallApp/page-not-found/page-not-found.component';
import { LoginComponent } from './smallApp/login/login.component';
import { PostlistComponent } from './smallApp/postlist/postlist.component';
import { PostDetailsComponent } from './smallApp/post-details/post-details.component';
import { AuthGuard } from './guards/auth.guard';
import { LogoutbtnComponent } from './smallApp/logoutbtn/logoutbtn.component';
import { RegistrationFormComponent } from './forms/registration-form/registration-form.component';
import { CanDeActivateGuard } from './guards/can-de-activate.guard';
import { BeautyProductComponent } from './smallApp/beauty-product/beauty-product.component';
import { RxJsComponent } from './RxJs/rx-js/rx-js.component';
import { RapidapiComponent } from './CRUD_rapidapi/rapidapi/rapidapi.component';

const routes: Routes = [
   { path : '' , redirectTo : 'login' , pathMatch: 'full'},
   { path : 'login' , component: LoginComponent },
   { path : 'home',canActivate : [AuthGuard], component : HomeComponent },
   { path : 'about',canActivate : [AuthGuard], component: AboutComponent },
   { path : 'contact',canActivate : [AuthGuard], component: ContactComponent },
   { path : 'logout', canActivate : [AuthGuard], component: LogoutbtnComponent},
   {
    path: 'product',
    //lazy loading syntax:
    loadChildren: () => import('./smallApp/product/products.module').then(m => m.ProductsModule)
   },
   { path : 'beauty' , component:BeautyProductComponent },
  //  { path : 'product', children : [
  //   { path : '' , component: ProductComponent },
  //   { path : 'mobile' , component : MobileComponent }
  //  ]} , // single router-outlet

  { path : 'postlist' ,canActivate : [AuthGuard], component: PostlistComponent },
  { path : 'register' ,component : RegistrationFormComponent , canDeactivate: [CanDeActivateGuard] },
  { path : 'postDetails/:id', component: PostDetailsComponent },
  { path: 'rxjs' , component: RxJsComponent },
  { path:'rapidapi', component: RapidapiComponent },
  { path : '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy : PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(){
     console.log('AppRoutingModule called');
     
  }
}
