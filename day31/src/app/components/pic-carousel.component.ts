import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pic-carousel',
  templateUrl: './pic-carousel.component.html',
  styleUrls: ['./pic-carousel.component.css']
})
export class PicCarouselComponent {

  @Input()
  title = "My Gallery"

  @Input()
  pictures: string[] = []

}
