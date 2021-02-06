/*
; ==============================
; Title: wishlist.component.ts
; Author: Professor Krasso
; Date: 06 February 2021
; Modified By: Brooklyn Hairston
; Description: Wishlist component
; ==============================
*/

import { Component, OnInit } from '@angular/core';

//import statement for the IWishlistItem interface
import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  //new variable with an empty array
  items: Array<IWishlistItem>=[];

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * @param item
   * @description: adds item to the items array
   */
  updateItemsHandler(item: IWishlistItem) {
    console.log('Inside the wishlist.component.ts (parent) - updateItemsHandler() function');
    console.log(item);
    this.items.push(item);
    console.log(this.items);
  }
}
