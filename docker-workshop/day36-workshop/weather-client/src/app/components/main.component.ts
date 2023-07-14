import { Component, inject, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Params, Router} from '@angular/router';
import {WeatherQuery} from '../models';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

  fb = inject(FormBuilder)
  router = inject(Router)

  form!: FormGroup

  ngOnInit(): void {
    this.form = this.createForm();
  }

  process() {
    const query = this.form.value as WeatherQuery
    console.info('>>> query: ', query)
    const queryParams: Params =  { units: query.units }
    this.router.navigate([ '/weather', query.city ], { queryParams: queryParams })
  }

  private createForm() {
    return this.fb.group({
      city: this.fb.control<string>('', [ Validators.required, Validators.minLength(2)]),
      units: this.fb.control('metric', [ Validators.required ])
    })
  }

}
