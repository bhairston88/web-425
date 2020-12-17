/*
========================================
; Title: app.components.ts
; Author: Professor Krasso
; Date: 17 December 2020
; Modified by: Brooklyn Hairston
; Description: App component
;========================================
*/



import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myWorld = "You are now in Brooklyn's World!";
}
