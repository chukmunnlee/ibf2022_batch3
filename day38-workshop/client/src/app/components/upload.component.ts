import { Component, inject, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PhotoService} from '../photo.service';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  photo = ""

  photoSvc = inject(PhotoService)
  router = inject(Router)

  ngOnInit() {
    if (!this.photoSvc.photo) {
      this.router.navigate(['/'])
      return
    }

    this.photo = this.photoSvc.photo
  }

}
