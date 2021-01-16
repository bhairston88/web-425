/*
; ==============================
; Title: sign-in-guard.ts
; Author: Professor Krasso
; Date: 16 January 2021
; Modified By: Brooklyn Hairston
; Description: Sign-in guard /*
; ==============================
*/

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
//import for Angular's Router
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {

  /**
   * @param route
   * @description: adds the router to the guard constructor
   */
  constructor(private router: Router) {

  };
/**
 *
 * @param next
 * @param state
 */
  canActivate(

    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

  //isLoggedIn variable assigned the returned value from the queryParams function
    let isLoggedIn = next.queryParams.isLoggedIn;

  //Returns true if isLoggedIn equals true, else sends users back to the sign-in page
    if (isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }

}
