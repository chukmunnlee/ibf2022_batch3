import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  form!: FormGroup

  fb = inject(FormBuilder)
  router = inject(Router)
  cartSvc = inject(CartService)

  ngOnInit(): void {
    this.form = this.fb.group({
      username: this.fb.control<string>('', [ Validators.required ])
    })
  }

  login() {
    const username = this.form.get('username')?.value
    this.cartSvc.username = username
    console.info('username: ', username)
    this.router.navigate(['/list'])
  }

}
