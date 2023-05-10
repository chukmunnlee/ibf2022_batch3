import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  numList: number[] = []

  processNumber(n: number) {
    console.info('new number: ', n)
    this.numList = [ ...this.numList, n ]
    //this.numList.push(n)
    // this.numList.pop()
    // this.numList.unshift(n)
    // this.numList.shift()
  }
}
