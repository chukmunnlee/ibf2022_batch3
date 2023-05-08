import { Component } from '@angular/core';
import { CartAction, CartItem } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cart: CartItem[] = []

  process(action: CartAction) {
    let i = this.cart.find(item => item.item == action.item)
    // Add
    if (action.quantity > 0) {
      if (!i) {
        /*
          let newItem: CartItem = { ...action }
          { item: action.item, quantity: action.quantity }
        */
        this.cart.push({ ...action} as CartItem)
      } else {
        i.quantity += action.quantity
      }
    }

    console.info('cart: ', this.cart)

  }
}
