import { Injectable, OnInit, inject } from "@angular/core";
import { v4 as uuidv4 } from 'uuid'
import { Cart } from "./models";
import { CartRepository } from "./cart.repository";

@Injectable()
export class CartService {

  username = "";

  cartRepo = inject(CartRepository)

  hasLogin(): boolean {
    return !!this.username
  }

  getCarts(): Promise<Cart[]> {
    return this.cartRepo.getCarts()
  }

  getCartById(cartId: string): Promise<Cart|null> {
    return this.cartRepo.getCartById(cartId)
  }

  saveCart(cart: Cart) {
    cart.cartId = uuidv4().substring(0, 8)
    return this.cartRepo.saveCart(cart)
  }
}
