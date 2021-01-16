/*
; ==============================
; Title: home-component.ts
; Author: Professor Krasso
; Date: 16 January 2021
; Modified By: Brooklyn Hairston
; Description: Home component
; ==============================
*/

import { Component, OnInit } from '@angular/core';

//imports Angular's ActivatedRoute
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoggedIn: boolean;
/**
 * @param route
 * @description: Uses Angular;s built-in queryParamMap function to assign this isLoggedIn variable the value being passed from the sign-in.component.ts
 */
  constructor(private route: ActivatedRoute) {
    this.isLoggedIn = Boolean(this.route.snapshot.queryParamMap.get('isLoggedIn'));
  }

  ngOnInit(): void {
  }

}
