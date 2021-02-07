/*
; ==============================
; Title: home.component.ts
; Author: Professor Krasso
; Date: 06 February 2021
; Modified By: Brooklyn Hairston
; Description: Home component
; ==============================
*/

import { Component, OnInit } from '@angular/core';
import { AuthLayoutComponent } from '../auth-layout/auth-layout.component';

//import statement for the ITranscript interface
import { ITranscript } from '../transcript.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //variable declarations
  transcriptEntry: ITranscript;
  selectableGrades: Array<string> = [
    'A', 'A-', 'B', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F'
  ];
  transcriptEntries: Array<ITranscript> = [];
  gpaTotal: number = 0;

  constructor() {
    this.transcriptEntry = {} as ITranscript;
  }

  ngOnInit(): void {
  }

  /**
   * @param: N/A
   * @description: Pushes the this.transcriptEntry to the transcriptEntries array
   * @description: Sets the this.transcriptEntry as an empty ITranscript object
   */
  saveEntry() {
    this.transcriptEntries.push(this.transcriptEntry);
    this.transcriptEntry = {} as ITranscript;
  }

  /**
   * @param: N/A
   * @description: A for loop that iterates over the transcriptEntries array, checks the transcriptEntry.grade and assigns the value
   */
  calculateResults() {
    let gpa: number = 0;
    for (let entry of this.transcriptEntries) {
      console.log(entry.grade)
      switch (entry.grade) {
        case 'A':
        console.log('its an a')
        gpa += 4.0;
        break;
        case 'A-':
          gpa += 3.70;
          break;
        case 'B+':
          gpa += 3.33;
          break;
        case 'B':
          gpa += 3.00;
          break;
        case 'B-':
          gpa += 2.70;
          break;
        case 'C+':
          gpa += 2.30;
          break;
        case 'C':
          gpa += 2.00;
          break;
        case 'C-':
          gpa += 1.70;
          break;
        case 'D+':
          gpa += 1.30;
          break;
        case 'D':
          gpa += 1.00;
          break;
        case 'D-':
          gpa += .70;
          break;
        case 'F':
          gpa += 0.00;
          break;
      }
    }

    //divides the gpa against the transcriptEntries array length and assigns the results to the gpaTotal variable
    console.log(gpa);
    this.gpaTotal = gpa / this.transcriptEntries.length;
    console.log(this.gpaTotal);
  }

  /**
   * @param: N/A
   * @description: Sets transcriptEntries to an empty array and gpaTotal to 0
   */
  clearEntries() {
    this.transcriptEntries = [];
    this.gpaTotal = 0;
  }

}
