/*
; ==============================
; Title: app-routing.module.ts
; Author: Professor Krasso
; Date: 12 February 2021
; Modified By: Brooklyn Hairston
; Description: App routing module
; ==============================
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

//import statements for the SignInComponent and the SignInGuard
import { SignInComponent } from './sign-in/sign-in.component';
import { SignInGuard } from './sign-in.guard';


//creates router paths to components
const routes: Routes = [
  {
   path: '',
   component: BaseLayoutComponent,
   children: [
     {
       path: '',
       component: HomeComponent
     }
   ],
   canActivate: [ SignInGuard ]
  },
{
  path: 'session',
  component: AuthLayoutComponent,
  children: [
    {
      path: 'not-found',
      component: NotFoundComponent
    },
    {
      path: 'sign-in',
      component: SignInComponent
    }
  ]
},
{
  path: '**',
  redirectTo: 'session/not-found'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
