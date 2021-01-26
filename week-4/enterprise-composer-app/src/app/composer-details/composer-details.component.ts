/*
; ==============================
; Title: composer-details-component.ts
; Author: Professor Krasso
; Date: 24 January 2021
; Modified By: Brooklyn Hairston
; Description: Composer details component
; ==============================
*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//imports the IComposer interface
import { IComposer } from '../composer.interface';
//imports the Composer service
import { ComposerService } from '../composer.service';

@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})
export class ComposerDetailsComponent implements OnInit {
//composerId variable with type number
  composerId: number;
  //composer variable with type IComposer
  composer: IComposer;

  //components constructor using the ActivatedRoute object
  constructor(private route: ActivatedRoute, private ComposerService: ComposerService) {

    //Calls the snapshot function to retrieve the composerId parameter value and assigns it to the composerId variable
    //Uses the parseInt to parse the string into a numerical value
    this.composerId = parseInt(this.route.snapshot.paramMap.get('composerId'), 10);

    //Checks the composerId value and creates a new Composer object with the getComposer(composerId: number) function assigned to the composer variable
    if (this.composerId) {
      this.composer = this.ComposerService.getComposer(this.composerId);
    }
  }

  ngOnInit(): void {
  }

}
