import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './smallApp/home/home.component';
import { AboutComponent } from './smallApp/about/about.component';
import { ContactComponent } from './smallApp/contact/contact.component';
import { PageNotFoundComponent } from './smallApp/page-not-found/page-not-found.component';

const routes: Routes = [
   { path : '', component : HomeComponent },
   { path : 'about', component: AboutComponent },
   { path : 'contact', component: ContactComponent },
   { path : '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
