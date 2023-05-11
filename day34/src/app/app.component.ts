import { AfterViewInit, Component, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Observable, Subject, Subscription, debounceTime, filter, map, startWith, tap } from 'rxjs';
import { InputComponent } from './components/input.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild(InputComponent)
  inputComp!: InputComponent

  keyPressed$!: Observable<string>

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    // this.keyPressed$ = this.inputComp.keyPressed.pipe(
    //   debounceTime(1000),
    //   map(s => s.toUpperCase())
    // )
  }

  ngOnDestroy(): void { }

  pressed() {
  }
}
