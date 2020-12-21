/*
; ==============================
; Title: app-component.ts
; Author: Professor Krasso
; Date: 19 December 2020
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
  assignment: string = "Assignment 1.5 -Components"
}
