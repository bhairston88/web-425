/*
; ==============================
; Title: sign-in-component.ts
; Author: Professor Krasso
; Date: 16 January 2021
; Modified By: Brooklyn Hairston
; Description: Sign-in component
; ==============================
*/

import { Component, OnInit } from '@angular/core';
//import for Angular's Router
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  isLoggedIn: boolean = false;

/**
 *
 * @param router
 */
  constructor(private router: Router) { }


  ngOnInit(): void {
  }
/**
 * @param: N/A
 * @description: updates the isLoggedIn value to true and calls the route.navigate() function
 * to navigate to he HomeComponent and passes-in the isLoggedIn value through the query params argument
 *
 */
  signIn() {
    this.isLoggedIn = true;

    this.router.navigate(['/home'], {queryParams: {isLoggedIn: this.isLoggedIn}, skipLocationChange: true})
  }
}
