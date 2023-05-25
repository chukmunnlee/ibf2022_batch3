import { Injectable, inject } from "@angular/core";
import Dexie from "dexie";
import { CartService } from "./cart.service";
import { Cart } from "./models";

@Injectable()
export class CartRepository extends Dexie {

  carts!: Dexie.Table<Cart, string>

  constructor() {
    super('cart')
    // Create the database
    this.version(1).stores({
      carts: 'cartId'
    })

    this.carts = this.table('carts')
  }

  getCartById(cartId: string): Promise<Cart | null> {
    return this.carts.where("cartId").equals(cartId).toArray()
        .then(result =>  result.length > 0? result[0]: null)
  }

  getCarts(): Promise<Cart[]> {
    return this.carts.toArray()
  }

  saveCart(cart: Cart) {
    return this.carts.add(cart)
  }
}

