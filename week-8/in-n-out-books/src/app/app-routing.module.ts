/*
; ==============================
; Title: app-routing.module.ts
; Author: Professor Krasso
; Date: 06 February 2021
; Modified By: Brooklyn Hairston
; Description: App Routing module
; ==============================
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BookListComponent } from './book-list/book-list.component';
import { ContactComponent } from './contact/contact.component';

//import statement for the Wishlist Component
import { WishlistComponent } from './wishlist/wishlist.component';

//creates a router paths to components
const routes: Routes = [
  {
    path: '',
    component: BookListComponent,
  },
  {
    path: 'book-list',
    component: BookListComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'wishlist',
    component: WishlistComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
