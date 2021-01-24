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


@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {
//composer variable with an Array of IComposer
  composers: Array<IComposer>;


//creates a new Composer object and assigns the getComposer() function to the composers variable
  constructor(private composerService: ComposerService) {
    this.composers = this.composerService.getComposers();
   }

  ngOnInit(): void {
  }

}
