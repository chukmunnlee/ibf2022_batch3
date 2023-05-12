import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { BookSummary } from "./models";

const URL = 'http://localhost:8080/api/book'

@Injectable()
export class BookService {

  http = inject(HttpClient)

  getBooksByTitle(title: string): Observable<BookSummary[]> {
    const params = new HttpParams().set('query', title)
    return this.http.get<BookSummary[]>(`${URL}/search`, { params })
  }

}

