/*
; ==============================
; Title: app-component.ts
; Author: Professor Krasso
; Date: 16 January 2021
; Modified By: Brooklyn Hairston
; Description: App component
; ==============================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//title variable
export class AppComponent {
  title: string = "Secure Profile App";
}

