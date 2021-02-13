/*
; ==============================
; Title: base-layout.component.ts
; Author: Professor Krasso
; Date: 12 February 2021
; Modified By: Brooklyn Hairston
; Description: Base layout component
; ==============================
*/

import { Component, OnInit } from '@angular/core';

//import statements for the CookieService and Router
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  //creates a new variable
  assignment: string;

  /**
   *
   * @param cookieService
   * @param router
   * @description: Assigns a value to the assignment variable
   */
  constructor(private cookieService: CookieService, private router: Router) {
    this.assignment = "GPA Calculator";
   }

  ngOnInit(): void {
  }

/**
 * @param: N/A
 * @description: Calls the cookieService.deleteAll() function and navigates users to the sign-in page
 */
  signOut() {
    this.cookieService.deleteAll()
    this.router.navigate(['/session/sign-in']);
  }

}
