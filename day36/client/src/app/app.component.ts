import { Component, inject } from '@angular/core';
import { Params, Router } from '@angular/router';
import { NumberService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  numSvc = inject(NumberService)

  constructor(private router: Router) { }

  gotoBear() {
    this.router.navigate([ '/bear' ])
  }

  displayNumber(i: number) {
    // by service
    // this.numSvc.toDisplay = i
    // this.router.navigate([ '/number'])

    const queryParams: Params = { size: 'md' }
    this.router.navigate(
      [ '/number', i ], { queryParams }
    )
  }
}
