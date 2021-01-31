/*
; ==============================
; Title: book-list-component.ts
; Author: Professor Krasso
; Date: 31 January 2021
; Modified By: Brooklyn Hairston
; Description: Book-list component
; ==============================
*/

import { Component, OnInit } from '@angular/core';

//import statements for the BookService, IBook interface and Observable
import { BooksService } from '../books.service';
import { IBook } from '../book-interface';
import { Observable } from 'rxjs';

//import statement for the MatDialogModule
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

//import statement for the BookDetailsDialogComponent
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  //Creates a new variable with and observable type
  books: Observable<IBook[]>;

  //Creates a new variable with a type of array
  header: Array<string> = ["isbn", "title", "numOfPages", "authors"]

  //Creates a new variable with type of IBook
  book: IBook;

  /**
   * @params booksService, dialog
   * @description: Calls the bookService.getBooks() function and assigns the results to the books variable
   */
  constructor(private booksService: BooksService, private dialog: MatDialog) {
    this.books = this.booksService.getBooks()
  }

  ngOnInit(): void {
  }

  /**
   * @param isbn
   * @description: Calls the booksService.getBook(isbn) function maps it to the book variable
   */
  showBookDetails(isbn:string) {
    this.book = this.booksService.getBook(isbn);

    //Creates a dialogRef object and assigns it to the dialog.open() function
    const dialogRef = this.dialog.open(BookDetailsDialogComponent, {
      data: {book: this.book},
      disableClose: true,
      width: '800px'
    })
    console.log(this.book);

    //Calls the afterClosed() function and sets the book variable to null
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        this.book = null;
      }
    })
  }

}
