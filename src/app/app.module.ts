import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenFromComponent } from './forms/template-driven-from/template-driven-from.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RapidapiComponent } from './CRUD_rapidapi/rapidapi/rapidapi.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginFormComponent } from './forms/login-form/login-form.component';
import { PipeComponent } from './Pipe/pipe/pipe.component';
import { AsyncpipeComponent } from './Pipe/asyncpipe/asyncpipe.component';
import { FilterPipe } from './Pipe/filter.pipe';
import { FilterPipeComponent } from './Pipe/filter-pipe/filter-pipe.component';
import { FilterWikiPediaPipe } from './Pipe/filter-wiki-pedia.pipe';
import { WikipediaComponent } from './CRUD_rapidapi/wikipedia/wikipedia.component';

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
    WikipediaComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
