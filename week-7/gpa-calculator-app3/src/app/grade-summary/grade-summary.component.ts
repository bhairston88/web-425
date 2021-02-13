/*
; ==============================
; Title: grade-summary.components.ts
; Author: Professor Krasso
; Date: 06 February 2021
; Modified By: Brooklyn Hairston
; Description: Grade summary component
; ==============================
*/

import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.css']
})
export class GradeSummaryComponent implements OnInit {

  //creates new input values
  @Input() grade: string;
  @Input() course: string;

  constructor() { }

  ngOnInit(): void {
  }

}
