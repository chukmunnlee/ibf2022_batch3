import { AfterViewInit, Component, ElementRef, ViewChild, inject } from '@angular/core';
import { MyService } from './my.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('title')
  title!: ElementRef

  @ViewChild('titletext')
  titleText!: ElementRef

  mySvc = inject(MyService)

  ngAfterViewInit(): void {
      console.info('>>> title: ', this.title.nativeElement)
      console.info('>>> titleText: ', this.titleText.nativeElement)
  }

  updateTitle() {
    const t = this.titleText.nativeElement.value
    this.title.nativeElement.innerText = t
    // Observable
    this.mySvc.onEvent.next(t)
  }

}
