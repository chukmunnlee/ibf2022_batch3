import { Component, Input } from '@angular/core';
import { CartItem } from '../models';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  @Input()
  contents: CartItem[] = []

}
