import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { Joke } from "./model";

@Injectable()
export class JokeService {

  http = inject(HttpClient)

  tellMeAJoke(): Observable<Joke> {
    return this.http.get<Joke>('https://official-joke-api.appspot.com/jokes/random')
  }

}

