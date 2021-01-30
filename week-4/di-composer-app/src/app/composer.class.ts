/*
; ==============================
; Title: composer.class.ts
; Author: Professor Krasso
; Date: 16 January 2021
; Modified By: Brooklyn Hairston
; Description: Composer class
; ==============================
*/


import { cpuUsage } from "process";
import { IComposer } from "./composer.interface";


//creates a Composer class with a composers variable with an array type
export class Composer {
  composers: Array<IComposer>;

  //a constructor with five composer objects
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
