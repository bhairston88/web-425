/*
; ==============================
; Title: base-layout.component.ts
; Author: Professor Krasso
; Date: 06 February 2021
; Modified By: Brooklyn Hairston
; Description: Base layout component
; ==============================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  //creates a new variable
  assignment: string;

  //assigns a value to the assignment variable
  constructor() {
    this.assignment = "Exercise 6.3 -Layouts"
   }

  ngOnInit(): void {
  }

}
