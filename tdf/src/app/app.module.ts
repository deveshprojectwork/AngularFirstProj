import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import {HttpClientModule} from  "@angular/common/http";
import { HomeComponent } from './components/home/home.component'

// It starts with @NgModule and contains an object which has declarations, imports, providers 
// and bootstrap.
// declarations :It is an array of components created. If any new component gets created, it will be imported first and the reference will be included in declarations as shown below −
// imports :It is an array of modules required to be used in the application.
// Providers :This will include the services created.
// Bootstrap : This includes the main app component for starting the execution.

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [HomeComponent] //this is very important to call
})
export class AppModule { }
