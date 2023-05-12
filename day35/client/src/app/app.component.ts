import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { RandomNumberService } from './services/random-number.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RandomData } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  randSvc = inject(RandomNumberService)
  fb = inject(FormBuilder)

  num$!: Observable<number[]>
  form!: FormGroup

  ngOnInit(): void {
    this.form = this.createForm()
  }

  getRandomNumbers() {
    this.num$ = this.randSvc.getRandomNumbers(10)
  }

  postWithJson() {
    const data: RandomData = this.form.value
    console.info('>> data: ', data)
    this.num$ = this.randSvc.postRandomNumbersAsJson(data)
  }

  postWithForm() {
    const data: RandomData = this.form.value
    console.info('>> data: ', data)
    this.num$ = this.randSvc.postRandomNumbersAsForm(data)
  }

  private createForm(): FormGroup {
    return this.fb.group({
      min: this.fb.control(0, [ Validators.required, Validators.min(-100), Validators.max(100) ]),
      max: this.fb.control(0, [ Validators.required, Validators.min(-100), Validators.max(100) ]),
      count: this.fb.control(5, [ Validators.required, Validators.min(-100), Validators.max(100) ]),
    })

  }
}
