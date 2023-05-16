import { AfterContentInit, Component, ContentChild, ElementRef, OnDestroy, OnInit, inject } from '@angular/core';
import { MyService } from '../my.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit, OnDestroy, AfterContentInit {

  mySvc = inject(MyService)

  @ContentChild('content')
  content!: ElementRef

  sub$!: Subscription

  ngOnInit(): void {
    // Observer
    this.sub$ = this.mySvc.onEvent.subscribe(
      value => {
        this.content.nativeElement.innerText = value
      }
    )
  }

  ngOnDestroy(): void {
      this.sub$.unsubscribe()
  }

  ngAfterContentInit(): void {
      console.info('>>> content: ', this.content)
      this.content.nativeElement.innerText = this.content.nativeElement.innerText.toLowerCase()
  }

}
