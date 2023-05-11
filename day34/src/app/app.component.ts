import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { Observable, Subject, Subscription, filter, map, startWith, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  count = 0
  log = 0
  countEvent = new Subject<number>()
  countSub$!: Subscription
  countObs$!: Observable<number>
  countObs2$!: Observable<number>

  ngOnInit(): void {
    this.countObs2$ = this.countEvent
    this.countObs$ = this.countEvent.pipe(
      startWith(this.count),
      filter(v => !(v % 2)),
      map(v => v * 10)
    )
    this.countSub$ = this.countEvent.subscribe(
      (v) => {
        this.log = v
        if (!(v % 2))
          this.count = v * 10
      }
    )
  }

  ngOnDestroy(): void {
      // must unsubscribe
      this.countSub$.unsubscribe()
  }

  pressed() {
    const n = Math.floor(Math.random() * 100) + 1
    // send the event
    this.countEvent.next(n)
  }
}
