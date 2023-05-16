import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class MyService {

  onEvent = new Subject<string>()

}
