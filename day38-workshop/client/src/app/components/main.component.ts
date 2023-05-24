import { Component, EventEmitter, inject, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {WebcamImage} from 'ngx-webcam';
import { Subject} from 'rxjs';
import {PhotoService} from '../photo.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  router = inject(Router)

  viewWidth = 0
  viewHeight = 0

  trigger$ = new Subject<void>()
  photoSvc = inject(PhotoService)

  ngOnInit(): void {
    this.viewWidth = window.innerWidth * .5
    this.viewHeight = window.innerHeight *.5
  }

  image(image: WebcamImage) {
    console.info('>>> image: ', image)
    this.photoSvc.photo = image.imageAsDataUrl
    this.router.navigate([ '/upload' ])
  }


  snap() {
    this.trigger$.next()
  }

}
