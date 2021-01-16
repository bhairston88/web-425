/*
; ==============================
; Title: app-routing.ts
; Author: Professor Krasso
; Date: 16 January 2021
; Modified By: Brooklyn Hairston
; Description: App Routing
; ==============================
*/

//imports Angular's Route module
import { Routes } from '@angular/router';
//imports the SignInComponent and HomeComponent
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';

//Creates router paths to components
export const AppRoutes: Routes = [
  {
    path: '',
    component: SignInComponent
  },
  {
    path: '',
    component: HomeComponent
  }
]
