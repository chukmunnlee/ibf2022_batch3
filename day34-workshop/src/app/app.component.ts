import { Component, inject } from '@angular/core';
import {Joke} from './model';
import { Observable } from 'rxjs';
import { JokeService } from './joke.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  joke$!: Observable<Joke>
  jokeSvc = inject(JokeService)

  pressed() {
    this.joke$ = this.jokeSvc.tellMeAJoke()
  }
}
