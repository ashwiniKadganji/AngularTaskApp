import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenFromComponent } from './forms/template-driven-from/template-driven-from.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RapidapiComponent } from './CRUD_rapidapi/rapidapi/rapidapi.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginFormComponent } from './forms/login-form/login-form.component';
import { PipeComponent } from './Pipe/pipe/pipe.component';
import { AsyncpipeComponent } from './Pipe/asyncpipe/asyncpipe.component';
import { FilterPipe } from './Pipe/filter.pipe';
import { FilterPipeComponent } from './Pipe/filter-pipe/filter-pipe.component';
import { FilterWikiPediaPipe } from './Pipe/filter-wiki-pedia.pipe';
import { WikipediaComponent } from './CRUD_rapidapi/wikipedia/wikipedia.component';
import { HomeComponent } from './smallApp/home/home.component';
import { AboutComponent } from './smallApp/about/about.component';
import { ContactComponent } from './smallApp/contact/contact.component';
import { PageNotFoundComponent } from './smallApp/page-not-found/page-not-found.component';
import { GiphySearchComponent } from './CRUD_rapidapi/giphy-search/giphy-search.component';
import { GiphyPipe } from './Pipe/giphy.pipe';
import { RegistrationFormComponent } from './forms/registration-form/registration-form.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { JsonPlaceHolderComponent } from './JsonPlaceHolder_CRUD/json-place-holder/json-place-holder.component';
import { LoginComponent } from './smallApp/login/login.component';
import { PostlistComponent } from './smallApp/postlist/postlist.component';
import { PostDetailsComponent } from './smallApp/post-details/post-details.component';
import { MatButtonModule, MatMenuModule } from '@angular/material';
import { LogoutbtnComponent } from './smallApp/logoutbtn/logoutbtn.component';
import { BeautyProductComponent } from './smallApp/beauty-product/beauty-product.component';
import { HookComponent } from './Hook/hook/hook.component';
import { RxJsComponent } from './RxJs/rx-js/rx-js.component';
import { GlobaErrorHandlerService } from './globa-error-handler.service';
import { ErrorInterceptor } from './error.interceptor';
import { DatabindingComponent } from './databinding/databinding.component';
import { OneWayDataBindingComponent } from './one-way-data-binding/one-way-data-binding.component';



@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFromComponent,
    LoginFormComponent,
    RapidapiComponent,
    PipeComponent,
    AsyncpipeComponent,
    FilterPipe,
    FilterPipeComponent,
    FilterWikiPediaPipe,
    WikipediaComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PageNotFoundComponent,
    GiphySearchComponent,
    GiphyPipe,
    RegistrationFormComponent,
    JsonPlaceHolderComponent,
    LoginComponent,
    PostlistComponent,
    PostDetailsComponent,
    LogoutbtnComponent,
    BeautyProductComponent,
    HookComponent,
    RxJsComponent,
    DatabindingComponent,
    OneWayDataBindingComponent
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatMenuModule,
    MatButtonModule,
    AppRoutingModule,
    
    
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass : GlobaErrorHandlerService
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(){
    console.log('appModule called');
    
  }
}
