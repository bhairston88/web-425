/*
; ==============================
; Title: book-list-component.ts
; Author: Professor Krasso
; Date: 19 February 2021
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

  //Creates a new variable with an array type
  books: Array<IBook> = [];

  //Creates a new variable with type of IBook
  book: IBook;

  /**
   * @params booksService, dialog
   * @description: Loops over the response data object and checks if the res.hasOwnProperty(key) is true
   * and pushes a new object to the books array
   */
  constructor(private booksService: BooksService, private dialog: MatDialog) {
    this.booksService.getBooks().subscribe(res => {
      console.log(res);
      for (let key in res) {
        if (res.hasOwnProperty(key)) {
          let authors = [];
          if (res[key].details.authors) {
            authors = res[key].details.authors.map(function(author) {
              return author.name;
            })
          }

          this.books.push({
            isbn: res[key].details.isbn_13 ? res[key].details.isbn_13 : res[key].details.isbn_10,
            title: res[key].details.title,
            description: res[key].details.subtitle ? res[key].details.subtitle : "N/A",
            numOfPages: res[key].details.number_of_pages,
            authors: authors
          })
        }
      }
    })
  }

  ngOnInit(): void {
  }

  /**
   * @param isbn
   * @description: Searches the books array and returns the matching book object
   */
  showBookDetails(isbn:string) {
    this.book = this.books.find(book => book.isbn === isbn);

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
