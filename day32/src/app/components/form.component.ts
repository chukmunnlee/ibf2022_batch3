import { Component, OnInit, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Friend } from '../models';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  friendsForm!: FormGroup
  factsArray!: FormArray
  nameField = 'name'
  friend!: Friend

  // @Autowire inject >= v14
  fb: FormBuilder = inject(FormBuilder)

  // Constructor injection
  //constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.friendsForm = this.createFormWithFormBuilder()
    // or sessionStorage
    const data = localStorage.getItem('friend')
    if (!!data) {
      this.friend = JSON.parse(data)
      console.info('>> friends from storage: ', this.friend)
    }
  }

  processForm() {
    const friend: Friend = this.friendsForm.value
    console.info('>> processing form: ', friend)
    //this.friendsForm = this.createFormWithFormBuilder()
    localStorage.setItem('friend', JSON.stringify(friend))
    this.friendsForm.reset()
  }

  invalidField(ctrlName: string): boolean {
    return !!(this.friendsForm.get(ctrlName)?.invalid && this.friendsForm.get(ctrlName)?.dirty)
  }

  addAFact() {
    this.factsArray.push(
      this.createFriendsFact()
    )
  }
  removeAFact(i: number) {
    this.factsArray.removeAt(i)
  }

  invalidForm() {
    return this.friendsForm.invalid || this.factsArray.length <= 0
  }

  private createFriendsFact(): FormGroup {
    return this.fb.group({
      fact: new FormControl<string>('', [ Validators.minLength(3), Validators.maxLength(16) ]),
      value: this.fb.control('', [ Validators.minLength(5) ])
    })
  }

  private createFormWithFormBuilder(): FormGroup {
    this.factsArray = this.fb.array([], [ Validators.minLength(1) ])
    return this.fb.group({
      [this.nameField]: this.fb.control<string>('', [ Validators.required, Validators.minLength(3) ]),
      email: this.fb.control<string>('', [ Validators.required, Validators.email ]),
      age: this.fb.control<number>(10, [ Validators.min(10) ]),
      gender: this.fb.control<string>(''),
      facts: this.factsArray
    })
  }

  private createForm(): FormGroup {
    return new FormGroup({
      [this.nameField]: new FormControl<string>('fred', [ Validators.required ]),
      email: new FormControl<string>(''),
      age: new FormControl<number>(10),
      gender: new FormControl<string>('')
    })
  }

}
