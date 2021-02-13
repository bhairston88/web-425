/*
; ==============================
; Title: sign-in.guard.ts
; Author: Professor Krasso
; Date: 12 February 2021
; Modified By: Brooklyn Hairston
; Description: Sign-in Guard
; ==============================
*/

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

//import statements for Router and CookieService
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {

  /**
   *
   * @param router
   * @param cookieService
   */

  constructor(private router: Router, private cookieService: CookieService) {

  }

  /**
   *
   * @param route
   * @param state
   */

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      //Creates a variable and assigns it the response from the cookieService.get('session_user') call
      const sessionUser = this.cookieService.get('session_user');

      //Checks the value of sessionUser, returns true if true, if returns false redirects the users back to the sign-in page
      if (sessionUser) {
        return true;
      } else {
        this.router.navigate(['/session/sign-in']);
        return false;
      }
  }

}
