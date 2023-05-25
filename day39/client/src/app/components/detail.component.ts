import { Component, Input, OnInit, inject } from '@angular/core';
import { CartService } from '../cart.service';

import { Cart } from '../models'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  cartSvc = inject(CartService)
  activatedRoute = inject(ActivatedRoute)

  cart$!: Promise<Cart|null>

  @Input()
  cartId!: string

  ngOnInit(): void {

    //const cartId = this.activatedRoute.snapshot.params['cartId']

    this.cart$ = this.cartSvc.getCartById(this.cartId)

  }

}
