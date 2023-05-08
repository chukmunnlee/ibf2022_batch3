import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nums',
  templateUrl: './nums.component.html',
  styleUrls: ['./nums.component.css']
})
export class NumsComponent {

  // Angular v16
  @Input({ required: true })
  value: number = 0

  pressed() {
    console.info(`value is ${this.value}`)
  }

  incValue(v = 1) {
    this.value += v
  }

}
