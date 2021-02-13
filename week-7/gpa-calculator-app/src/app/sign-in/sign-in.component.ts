/*
; ==============================
; Title: sign-in.component.ts
; Author: Professor Krasso
; Date: 12 February 2021
; Modified By: Brooklyn Hairston
; Description: Sign-in Component
; ==============================
*/

import { Component, OnInit } from '@angular/core';

//import statements for SignInService, Router, FormBuilder, FormGroup, Validators and CookieService
import { SignInService } from '../sign-in.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signinForm: FormGroup;
  errorMessage: string;

  /**
   *
   * @param router
   * @param cookieService
   * @param fb
   * @param signinService
   */

  constructor(private router: Router, private cookieService: CookieService, private fb: FormBuilder, private signinService: SignInService) {
    console.log(this.cookieService.get('session_user'));
  }

  /**
   * @param: N/A
   * @description: Creates a new FormGroup with one FormControl
   * Adds a form Validator that is required and only allow for numeric values
   */
  ngOnInit(): void {
    this.signinForm = this.fb.group({
      studentId: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])]
    })
    }


    /**
     * @param: N/A
     * @description: Retrieves the studentId value from the studentId Form Control
     * Then compares the returned value from the signinService.validate() function
     * If it returns true a cookie is added to the user's browser and navigates them to the root path
     * If it returns false an error message is shown
     */
    onSubmit() {
      const formValues = this.signinForm.value;
      const studentId = parseInt(formValues.studentId);

      if (this.signinService.validate(studentId)) {
        this.cookieService.set('session_user', studentId.toString(), 1)
        this.router.navigate(['/'])
      } else {
        this.errorMessage = 'The student ID you entered is invalid, please try again.';
      }
    }

    /**
     * @param: N/A
     * @description: Returns the signinForm controls
     */
    get form() {
      return this.signinForm.controls;
    }

}
