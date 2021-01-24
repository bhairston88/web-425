/*
; ==============================
; Title: composer-component.ts
; Author: Professor Krasso
; Date: 24 January 2021
; Modified By: Brooklyn Hairston
; Description: Composer component
; ==============================
*/

import { Component, OnInit } from '@angular/core';
//imports the IComposer interface
import { IComposer } from "../composer.interface";
//imports the Composer service
import { ComposerService } from '../composer.service';
//imports Angular's FormControl
import { FormControl } from '@angular/forms';
//imports rxjs' debounceTime component
import { debounceTime, subscribeOn } from 'rxjs/operators';


@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {
//composer variable with an Array of IComposer
  composers: Array<IComposer>;

//txtSearchControl variable with a new instance of a FormControl object
txtSearchControl = new FormControl('');


//creates a new Composer object and assigns the getComposer() function to the composers variable
  constructor(private composerService: ComposerService) {
    this.composers = this.composerService.getComposers();

    //A subscribe method that listens for valueChanges and calls the filterComposers() function
    //Adds a debounceTime(() function that waits 500ms before calling the filterComposers() function
    this.txtSearchControl.valueChanges.pipe(debounceTime(500)).subscribe(val => this.filterComposers(val));
   }

  ngOnInit(): void {
  }
/**
 *
 * @param name
 * @description Triggers an alert that returns the entered string
 */
  filterComposers(name: string) {
    alert(name);
  }
}


