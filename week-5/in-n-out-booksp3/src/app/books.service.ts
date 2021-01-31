/*
; ==============================
; Title: books.service.ts
; Author: Professor Krasso
; Date: 31 January 2021
; Modified By: Brooklyn Hairston
; Description: Books service
; ==============================
*/

import { Injectable } from '@angular/core';

//imports the IBook interface
import { IBook } from './book-interface';

//imports the rxjs observable class, of operator and map operator
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  //Creates a new variable with an array type
  books: Array<IBook>;

//Creates five book objects
  constructor() {
    this.books = [
      {
        isbn: "057504800",
        title: "Good Omens: The Nice and Accurate Prophecies of Agnes Nutter, (Witch)",
        description: "Judgement Day is approaching and  for Aziraphale, a fussy angel, and Crowley, a fast-living demon, who have grown rather fond of humanity are not looking forward to it.  Saving the world will require a bit of luck, a little magic and whole lot of teamwork.  Especially since someone appears to have misplaced the Antichrist . . .",
        numOfPages: 512,
        authors: ["Neil Gaiman & Terry Pratchett"]
      },
      {
        isbn: "0064407055",
        title: "Ella Enchanted",
        description: "A retelling of Cinderella, in which Ella, a girl cursed at birth to always be obedient must navigate insane fairies, gentle giants and bloodthirsty ogres in order to fine her voice and break her curse.",
        numOfPages: 240,
        authors: ["Gail Carson Levine"]
      },
      {
        isbn: "1408816032",
        title: "The Song of Achilles",
        description: "Achilles, \"the best of all the Greeks,\" son of the cruel sea goddess Thetis and the legendary king Peleus, is strong, swift, and beautiful— irresistible to all who meet him. Patroclus is an awkward young prince, exiled from his homeland after an act of shocking violence. Brought together by chance, they forge an inseparable bond, despite risking the gods' wrath.",
        numOfPages: 352,
        authors: ["Madeline Miller"]
      },
      {
        isbn: "0575085118",
        title: "Fire",
        description: "The story of a young monster in the shape of a human who is hated because of her difference and supernatural abilities.",
        numOfPages: 480,
        authors: ["Kristin Cashore"]
      },
      {
        isbn: "9780380977284",
        title: "Stardust",
        description: "In the village of Wall, Tristran Thorn has lost his heart to the beautiful Victoria Forester and for the coveted prize of her hand, Tristran vows to leave Wall for the magical land of Faerie to retrieve a fallen star and deliver it to his beloved.",
        numOfPages: 256,
        authors: ["Neil Gaiman"]
      },
    ]
  }

  /**
   * @param: NA
   * @description: Casts the books array to an observable and returns them
   */
  getBooks(): Observable<IBook[]> {
    return of(this.books);

  }

  /**
   * @param isbn
   * @description: Loops over the IBook array and returns a book matching the passed-in isbn number
   */
  getBook(isbn: string): IBook {
    for (let book of this.books) {
      if (book.isbn === isbn) {
        return book;
      }
    }
  }
}
