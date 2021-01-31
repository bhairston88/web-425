/*
; ==============================
; Title: app.component.ts
; Author: Professor Krasso
; Date: 31 January 2021
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
export class AppComponent {

  //creates a new variable
  assignment: string;

  //assigns a value to the assignment variable
  constructor() {
    this.assignment = "Assignment 5.4 -Dialogs";
  }
}
