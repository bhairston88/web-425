/*
; ==============================
; Title: composer-component.ts
; Author: Professor Krasso
; Date: 11 January 2021
; Modified By: Brooklyn Hairston
; Description: Composer component
; ==============================
*/

import { Component, OnInit } from '@angular/core';

//creates a Composer class with two fields, fullName and genre
export default class Composer {
  fullName: string;
  genre: string;

  //a constructor with two parameters, fullName and genre
  constructor(fullName: string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  //a composer variable with an array data type
  composers: Array<Composer>;

//creates a new array with five new composer objects
  constructor() {
    this.composers = [
      new Composer("Claude Debussy", "classical"),
      new Composer("Ludwig van Beethoven", "classical"),
      new Composer("Wolfgang Amadeus Mozart", "classical"),
      new Composer("Johann Bach", "classical"),
      new Composer("Frederic Chopin", "classical")
    ]
   }

  ngOnInit(): void {
  }

}
