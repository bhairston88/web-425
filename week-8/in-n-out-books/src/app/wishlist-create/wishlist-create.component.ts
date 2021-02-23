/*
; ==============================
; Title: wishlist-create.component.ts
; Author: Professor Krasso
; Date: 06 February 2021
; Modified By: Brooklyn Hairston
; Description: wishlist-create component
; ==============================
*/

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

//import statement for the IWishlistItem
import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist-create',
  templateUrl: './wishlist-create.component.html',
  styleUrls: ['./wishlist-create.component.css']
})
export class WishlistCreateComponent implements OnInit {

  item: IWishlistItem;

  //addItemEmitter output statement
  @Output() addItemEmitter = new EventEmitter<IWishlistItem>();

  /**
   * @param: N/A
   * @description: creates anew instance of the IWishlistItem object
   */
  constructor() {
    this.item = {} as IWishlistItem;
  }

  ngOnInit(): void {
  }

  /**
   * @param: N/A
   * @description: creates a new object literal of IWishlistItem and emits the object
   */
  addItem() {
    console.log('Inside wishlist-create.component.ts (child) - addItem() function')
    this.addItemEmitter.emit({
      title: this.item.title,
      authors: this.item.authors
    })

    //sets the object as an empty object
    this.item = {} as IWishlistItem;
  }

}
