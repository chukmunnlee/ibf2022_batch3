import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-num-input',
  templateUrl: './num-input.component.html',
  styleUrls: ['./num-input.component.css']
})
export class NumInputComponent implements OnInit {

  @Output()
  onNewNumber = new Subject<number>()

  form!: FormGroup

  ngOnInit(): void {
    this.form= this.createForm()
  }

  processForm() {
    const n = this.form.value['value']
    this.onNewNumber.next(n)
    this.form = this.createForm()
  }

  invalid(): boolean {
    return this.form.invalid || (this.form.value['value'] == 0)
  }

  private createForm(): FormGroup {
    return new FormGroup({
      value: new FormControl<number>(0
          , [ Validators.required, Validators.min(-100), Validators.max(100)])
    })
  }

}
