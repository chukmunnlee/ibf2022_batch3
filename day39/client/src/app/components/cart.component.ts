import { Component, OnInit, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cart } from '../models';
import { LeaveComponent } from '../util';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, LeaveComponent {

  title = inject(Title)
  cartSvc = inject(CartService)
  router = inject(Router)
  fb = inject(FormBuilder)

  form!: FormGroup
  itemArr!: FormArray

  ngOnInit(): void {
    // if (!this.cartSvc.hasLogin()) {
    //   this.router.navigate(['/'])
    //   return
    // }
    this.title.setTitle(`Cart: ${this.cartSvc.username}`)
    this.createForm()
  }

  canExit(): boolean {
    return !this.form.dirty
  }

  getMessage(): string {
      return "You have not saved your cart.\nAre you sure you wan to leave?"
  }

  saveCart() {
    const cart: Cart = this.form.value
    console.info('>>> cart: ', cart)
    this.cartSvc.saveCart(cart)
      .then(result => {
        console.info('>>> saved to db: ', result)
        // clear the form
        this.createForm()
        this.router.navigate(['/list'])

      })
      .catch(error => {
        console.error('error: ', error)
      })

  }

  addItem() {
    this.itemArr.push(this.createItem())
  }

  removeItem(i: number) {
    this.itemArr.removeAt(i)
  }

  invalid() {
    return this.form.invalid || this.itemArr.length <= 0
  }

  private createItem(): FormGroup {
    return this.fb.group({
      item: this.fb.control<string>('', [ Validators.required ]),
      quantity: this.fb.control<number>(1, [ Validators.required, Validators.min(1) ])
    })
  }

  private createForm() {
    this.itemArr = this.fb.array([])
    this.form = this.fb.group({
      title: this.fb.control<string>('', [ Validators.required ]),
      comments: this.fb.control<string>(''),
      items: this.itemArr
    })
  }

}
