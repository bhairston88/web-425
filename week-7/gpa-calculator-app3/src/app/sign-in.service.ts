/*
; ==============================
; Title: sign-in.service.ts
; Author: Professor Krasso
; Date: 12 February 2021
; Modified By: Brooklyn Hairston
; Description: Sign-in Service
; ==============================
*/

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  studentIds: Array<number>;

  /**
   * @param: N/A
   * @description: Populates the studentIds array
   */
  constructor() {
    this.studentIds = [
      1007, 1008, 1010, 1011, 1012
    ];
  }

  /**
   *
   * @param studentId
   * @description: Iterates over the studentIds array and returns true if there is a match
   */
  validate(studentId: number) {
    return this.studentIds.some(id => id === studentId);
  }

}
