import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { ApiResponse } from "./models";
import { Observable, lastValueFrom, map } from "rxjs";

@Injectable()
export class DogService {

  //http = inject(HttpClient)

  constructor(private http: HttpClient) { }

  getDogAsObservable(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>('https://dog.ceo/api/breeds/image/random')
  }

  getDogAsObservableImage(): Observable<string> {
    return this.http.get<ApiResponse>('https://dog.ceo/api/breeds/image/random')
        .pipe(
          map(resp => resp.message)
        )
  }

  getDogAsPromise(): Promise<ApiResponse> {
    return lastValueFrom(
      this.http.get<ApiResponse>('https://dog.ceo/api/breeds/image/random')
    )
  }

  getDogAsPromiseImage(): Promise<string> {
    return lastValueFrom(
      this.http.get<ApiResponse>('https://dog.ceo/api/breeds/image/random')
    )
    .then(resp => resp.message)
  }

}
