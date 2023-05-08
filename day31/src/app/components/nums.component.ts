import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-nums',
  templateUrl: './nums.component.html',
  styleUrls: ['./nums.component.css']
})
export class NumsComponent {

  // Angular v16
  // Attribute
  @Input({ required: true })
  value: number = 0

  // Event
  @Output()
  onSelected = new Subject<number>()

  pressed(e: any) {
    console.info(`value is ${this.value}`)
    //console.info('e = ', e)
    this.onSelected.next(this.value)
  }

  incValue(v = 1) {
    this.value += v
  }

}
