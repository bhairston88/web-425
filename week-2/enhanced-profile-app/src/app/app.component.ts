/*
; ==============================
; Title: app-component.ts
; Author: Professor Krasso
; Date: 08 January 2021
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

//creates a isLoggedIn variable and assignment variable
export class AppComponent {
  isLoggedIn: boolean = true;
  assignment: string = "Exercise 2.3: -Data Binding";
}

