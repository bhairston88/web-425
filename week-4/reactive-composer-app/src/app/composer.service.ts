/*
; ==============================
; Title: composer-service.ts
; Author: Professor Krasso
; Date: 24 January 2021
; Modified By: Brooklyn Hairston
; Description: Composer Service
; ==============================
*/



import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {

  //creates a Composer class with a composers variable with an array type
  composers: Array<IComposer>;

  //a constructor composer objects
  constructor() {
    this.composers = [
      {
        composerId: 100, fullName: "Claude Debussy", genre: "classical"
      },
      {
        composerId: 200, fullName: "Ludwig van Beethoven", genre: "classical"
      },
      {
        composerId: 300, fullName: "Wolfgang Amadeus Mozart", genre: "classical"
      },
      {
        composerId: 400, fullName: "Johann Bach", genre: "classical"
      },
      {
        composerId: 500, fullName: "Frederic Chopin", genre: "classical"
      },

      ]
    }
    /**
     * params: N/A
     * description: returns the composer array
     */
    getComposers() {
      return this.composers;
    }
  /**
   *
   * @param composerId
   * description: loops over the composer array and returns the object that matches the passed-in composerId
   */
    getComposer(composerId: number) {
      for (let composer of this.composers) {
        if (composer.composerId == composerId) {
          return composer;
        }
      }
    }
  }
