import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { NumberService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent implements OnInit, OnDestroy{

  numberSvc = inject(NumberService)
  activatedRoute = inject(ActivatedRoute)
  title = inject(Title)

  imageSize = 200
  toDisplay = 0
  params$!: Subscription

  ngOnInit(): void {
    // this.toDisplay = this.numberSvc.toDisplay

    this.params$ = this.activatedRoute.params.subscribe(
      values => {
        console.info('>>> value: ', values)
        this.updateView(values['num'], 'lg')
      }
    )

    // this.toDisplay = this.activatedRoute.snapshot.params['num']

    // this.title.setTitle(`Number: ${this.toDisplay}`)

    // const size = this.activatedRoute.snapshot.queryParams['size']
    // switch (size) {
    //   case 'sm':
    //     this.imageSize = 150
    //     break

    //   default:
    //   case 'md':
    //     this.imageSize = 200
    //     break;

    //   case 'lg':
    //     this.imageSize = 250
    // }
  }

  ngOnDestroy(): void {
    console.info('Leaving NumberComponent')
      this.params$.unsubscribe()
  }

  private updateView(i: number, sz: string) {
    this.toDisplay = i
    this.title.setTitle(`Number: ${this.toDisplay}`)

    switch (sz) {
      case 'sm':
        this.imageSize = 150
        break

      default:
      case 'md':
        this.imageSize = 200
        break;

      case 'lg':
        this.imageSize = 250
    }

  }
}
