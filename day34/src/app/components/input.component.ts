import { Component, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  @Output()
  keyPressed = new Subject<string>()

  keypressed(event: any) {
    //console.info(">> event: ", event.target.value)
    this.keyPressed.next(event.target.value)
  }
}
