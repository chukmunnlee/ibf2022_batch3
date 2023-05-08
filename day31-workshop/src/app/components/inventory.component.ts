import { Component, Output } from '@angular/core';
import { FRUITS } from '../ constants';
import { CartAction } from '../models';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {

  @Output()
  onItemSelection = new Subject<CartAction>()

  fruits = FRUITS

  inc(i: number) {
    const action: CartAction = {
      item: this.fruits[i],
      quantity: 1
    }
    this.onItemSelection.next(action)
  }
  dec(i: number) {
    const action: CartAction = {
      item: this.fruits[i],
      quantity: -1
    }
    this.onItemSelection.next(action)
  }

}
