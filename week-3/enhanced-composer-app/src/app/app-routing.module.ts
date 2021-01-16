/*
; ==============================
; Title: app-routing-module.ts
; Author: Professor Krasso
; Date: 11 January 2021
; Modified By: Brooklyn Hairston
; Description: App routing module
; ==============================
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//imports app components
import { ComposerListComponent } from './composer-list/composer-list.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ComposerDetailsComponent } from './composer-details/composer-details.component'


//creates a router paths to components
const routes: Routes = [
  {
    path: '',
    component: ComposerListComponent
  },
  {
    path: 'composer-list',
    component: ComposerListComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'composer-details/:composerId',
    component: ComposerDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
