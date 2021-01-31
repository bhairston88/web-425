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
   * @param booksService
   * @description: Calls the bookService.getBooks() function and assigns the results to the books variable
   */
  constructor(private booksService: BooksService) {
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
    console.log(this.book);
  }

}
