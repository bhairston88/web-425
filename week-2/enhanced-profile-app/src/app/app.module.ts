/*
; ==============================
; Title: app-module.ts
; Author: Professor Krasso
; Date: 08 January 2021
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

@NgModule({
  declarations: [
    AppComponent,
    MyDetailsComponent,
    MyImageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
