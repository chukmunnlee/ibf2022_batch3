import { Component, inject, Input, OnInit, Output } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {

  @Input()
  canShare = false

  @Output()
  onThought = new Subject<string>()

  form!: FormGroup
  fb: FormBuilder = inject(FormBuilder)

  ngOnInit(): void {
    this.form = this.fb.group({
      thought: this.fb.control('', [Validators.required, Validators.minLength(5) ])
    })
  }

  share() {
    const text = this.form.value['thought']
    this.onThought.next(text)
  }

  clear() {
    this.form.reset()
  }

  invalid(): boolean {
    return !this.canShare || this.form.invalid
  }

}
