import { Component, ElementRef, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

import { CartService } from './cart.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  username!: string

  router = inject(Router)
  cartSvc = inject(CartService)

  constructor(private elem: ElementRef) { }

  ngOnInit(): void {
    console.info('>>>> elementRef: ', this.elem.nativeElement.getAttribute('username'))
    this.username = this.elem.nativeElement.getAttribute("username")
    if (!!this.username) {
      this.cartSvc.username = this.username
      this.router.navigate(['/list'])
    }
  }
}
