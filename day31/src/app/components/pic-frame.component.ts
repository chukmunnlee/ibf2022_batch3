import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pic-frame',
  templateUrl: './pic-frame.component.html',
  styleUrls: ['./pic-frame.component.css']
})
export class PicFrameComponent {

  @Input()
  image: string = ''

  @Input()
  altText = 'no alt text'

  name = 'fred'

}
