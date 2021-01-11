/*
; ==============================
; Title: app-routing-module.ts
; Author: Professor Krasso
; Date: 07 January 2021
; Modified By: Brooklyn Hairston
; Description: App routing module
; ==============================
*/

//imports module and router module
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//imports app components
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component'

//create router paths to components
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
