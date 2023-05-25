import { Component, OnInit, inject } from '@angular/core';
import { CartService } from '../cart.service';
import { Cart } from '../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  cartSvc = inject(CartService)

  carts$!: Promise<Cart[]>

  ngOnInit(): void {

    this.carts$ = this.cartSvc.getCarts()

  }

}
