/*
; ==============================
; Title: my-details.component.ts
; Author: Professor Krasso
; Date: 08 January 2021
; Modified By: Brooklyn Hairston
; Description: My detail component
; ==============================
*/

import { Component, OnInit } from '@angular/core';

//create a Person class
export default class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = [
    "#TypeScript", "#2020", "#CodingWithAngular", "#ngOmaha"
  ];

  //Person constructor with passed-in parameters
  constructor(fullName:string, favoriteFood: string, favoriteColor: string) {
    this.fullName = fullName;
     this.favoriteFood = favoriteFood;
     this.favoriteColor = favoriteColor;
  }
}

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {

  myProfile: Person;

//creates a new instance of the Person class
  constructor() {
    this.myProfile = new Person("Brooklyn Hairston", "Mashed Potatoes", "Blue");
   }

  ngOnInit(): void {
  }

}
