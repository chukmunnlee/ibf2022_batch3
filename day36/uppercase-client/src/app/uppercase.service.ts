import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { UppercaseResponse } from "./models";
import { Observable, map } from "rxjs";

@Injectable()
export class UppercaseService {

  http = inject(HttpClient)

  toUppercase(text: string): Observable<string> {

    //text=abc123
    const params = new HttpParams().set('text', text)

    return this.http.get<UppercaseResponse>('/api/uppercase', { params })
      .pipe(
        map(resp => resp.text)
      )
  }

}
