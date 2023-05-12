import { Component, OnInit, inject } from '@angular/core';
import { Observable, Subject, debounceTime, filter, map, mergeMap, tap } from 'rxjs';
import { BookService } from './book.service';
import { BookSummary } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  titleInput = new Subject<string>
  bookSvc = inject(BookService)
  search$!: Observable<BookSummary[]>

  ngOnInit(): void {
    this.search$ = this.titleInput.pipe(
      filter(title => title.trim().length > 0),
      //debounceTime(300),
      mergeMap(title => this.bookSvc.getBooksByTitle(title))
    )
  }

  keypressed(text: any) {
    this.titleInput.next(text as string)
  }
}
