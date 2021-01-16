/*
; ==============================
; Title: app-module.ts
; Author: Professor Krasso
; Date: 16 January 2021
; Modified By: Brooklyn Hairston
; Description: App module
; ==============================
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//imports the app components
import { AppComponent } from './app.component';
import { MyDetailsComponent } from './my-details/my-details.component';
import { MyImageComponent } from './my-image/my-image.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
//imports the AppRoutes object
import { AppRoutes } from './app.routing';
//imports the RouterModule
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    MyDetailsComponent,
    MyImageComponent,
    SignInComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    //Calls the RouterModule and passes-in the AppRoutes array of objects
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
