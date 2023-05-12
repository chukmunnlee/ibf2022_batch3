import { Component, OnInit, inject } from '@angular/core';
import { RandomNumberService } from '../services/random-number.service';
import { Observable } from 'rxjs';
import { RandomResponse } from '../models';

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.css']
})
export class LoggerComponent implements OnInit {

  randSvc = inject(RandomNumberService)

  num$!: Observable<RandomResponse>

  ngOnInit(): void {
    this.num$ = this.randSvc.onRequest
  }

}
