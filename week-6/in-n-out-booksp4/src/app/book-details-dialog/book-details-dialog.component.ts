/*
; ==============================
; Title: book-details-dialog.component.ts
; Author: Professor Krasso
; Date: 31 January 2021
; Modified By: Brooklyn Hairston
; Description: Book details dialog component
; ==============================
*/

import { Component, OnInit } from '@angular/core';

//imports MAT_DIALOG_DATA and MatDialogRef
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

//imports Inject and IBook
import { Inject } from '@angular/core';
import { IBook } from '../book-interface';


@Component({
  selector: 'app-book-details-dialog',
  templateUrl: './book-details-dialog.component.html',
  styleUrls: ['./book-details-dialog.component.css']
})
export class BookDetailsDialogComponent implements OnInit {

  book: IBook;

/**
 *
 * @param dialogRef
 * @param data
 * @description maps the data.book value to teh book variable
 */
  constructor(private dialogRef: MatDialogRef<BookDetailsDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.book = data.book;
   }

  ngOnInit(): void {
  }

}
