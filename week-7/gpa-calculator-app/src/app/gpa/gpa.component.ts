/*
; ==============================
; Title: gpa.component.ts
; Author: Professor Krasso
; Date: 06 February 2021
; Modified By: Brooklyn Hairston
; Description: GPA component
; ==============================
*/

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css']
})
export class GpaComponent implements OnInit {

  //Creates an input variable
  @Input() gpaTotal: number;

  constructor() { }

  ngOnInit(): void {
  }

}
