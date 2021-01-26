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
//imports rxjs Observable object and rxjs of operator
import { Observable } from 'rxjs';
import { of } from 'rxjs';
//imports the rxjs map operator
import { map } from 'rxjs/operators';


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
     * @param: N/A
     * @description: Returns an Observable array of IComposer objects
     */
    getComposers(): Observable<IComposer[]> {
      return of(this.composers);
    }
  /**
   *
   * @param composerId
   *@description: Loops over the composer array and returns the object that matches the passed-in composerId
   */
    getComposer(composerId: number) {
      for (let composer of this.composers) {
        if (composer.composerId == composerId) {
          return composer;
        }
      }
    }
/**
 *
 * @param name
 * @description: filters the composers array and returns a new Observable array where characters in the name parameter match those in the composer.fullName call
 */
    filterComposers(name:string): Observable<IComposer[]> {
      return of(this.composers).pipe(map(composers => composers.filter(composer => composer.fullName.toLowerCase().indexOf(name) > -1)));
    }
  }
