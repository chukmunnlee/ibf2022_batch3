import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  fb = inject(FormBuilder)
  form!: FormGroup
  name!: string
  email!: string

  form$!: Observable<any>

  ngOnInit(): void {
    this.form = this.fb.group({
      name: this.fb.control('', [ Validators.required ]),
      email: this.fb.control('', [ Validators.required ]),
    })
    this.form$ = this.form.valueChanges

    this.form.valueChanges.subscribe(v => { })
    // this.form.valueChanges.subscribe(
    //   v => {
    //     console.info('value = ', v)
    //   }
    // )
    // this.form.statusChanges.subscribe(
    //   v => {
    //     console.info('status = ', v)
    //   }
    // )
  }

}
