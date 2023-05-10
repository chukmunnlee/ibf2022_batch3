import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-num-list',
  templateUrl: './num-list.component.html',
  styleUrls: ['./num-list.component.css']
})
export class NumListComponent implements OnChanges {

  private _numbers: number[] = []

  total = 0

  @Input()
  numbers: number[] = []

  ngOnChanges(changes: SimpleChanges): void {
    const numList = changes['numbers']
    if (numList.firstChange)
      return
    this.total = (numList.currentValue as number[]).reduce((acc, v) => acc + v)
    console.info('>>> changes: ', changes)
  }

  // @Input()
  // get numbers(): number[] {
  //   return this._numbers
  // }
  // set numbers(nums: number[]) {
  //   console.info('>>> in set, new number list: ', nums)
  //   this._numbers = nums
  //   if (this._numbers.length > 0)
  //     this.total = this._numbers.reduce((x, y) => x + y)
  // }


}
