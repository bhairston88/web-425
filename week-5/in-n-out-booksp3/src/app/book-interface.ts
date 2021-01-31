/*
; ==============================
; Title: book-interface.ts
; Author: Professor Krasso
; Date: 30 January 2021
; Modified By: Brooklyn Hairston
; Description: Book interface object
; ==============================
*/

//exports the IBook interface object
export interface IBook {
  isbn: string;
  title: string;
  authors: Array<string>;
  description: string;
  numOfPages: number
}
