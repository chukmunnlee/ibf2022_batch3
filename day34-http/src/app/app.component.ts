import { Component, inject } from '@angular/core';
import { DogService } from './dog.service';
import { Observable } from 'rxjs';
import { ApiResponse } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  dogSvc = inject(DogService)

  //constructor(private dogSvc: DogService) { }

  resp$!: Observable<ApiResponse>
  prom$!: Promise<string>

  getDogsAsPromise() {
    this.prom$ = this.dogSvc.getDogAsPromiseImage()
  }

  getDogsAsObservable() {
    this.resp$ = this.dogSvc.getDogAsObservable()
  }
}
