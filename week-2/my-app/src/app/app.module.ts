/*
; ==============================
; Title: app-module.ts
; Author: Professor Krasso
; Date: 07 January 2021
; Modified By: Brooklyn Hairston
; Description: App module
; ==============================
*/

//import module and browser module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import app and navigation components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
