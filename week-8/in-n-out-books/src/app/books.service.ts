/*
; ==============================
; Title: books.service.ts
; Author: Professor Krasso
; Date: 19 February 2021
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

//import statement for HttpClient and HttpParams
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

//new variable with type array
isbns: Array<string> = [
  "0345339681",
  "0261103571",
  "9780593099322",
  "9780261102361",
  "9780261102378",
  "9780590302715",
  "9780316769532",
  "9780743273565",
  "9780590405959"
];

  constructor(private http: HttpClient) {
  }

  /**
   * @param: NA
   * @description: Calls the Open Library U
   */
  getBooks() {
    let params = new HttpParams();

    params = params.append("bibkeys", `ISBN:${this.isbns.join(',')}`);
    params = params.append("format", "json");
    params = params.append("jscmd", "details");

    return this.http.get("https://openlibrary.org/api/books", {params: params})

  }
}
