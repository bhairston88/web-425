/*
; ========================================
; Title: app.components.ts
; Author: Professor Krasso
; Date: 17 December 2020
; Modified by: Brooklyn Hairston
; Description: Module component
; ========================================
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
