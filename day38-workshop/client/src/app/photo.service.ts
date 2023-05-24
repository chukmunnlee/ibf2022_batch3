import { HttpClient } from "@angular/common/http";
import {Injectable, inject} from "@angular/core";

@Injectable()
export class PhotoService {

  photo = "";

  http = inject(HttpClient)

  upload(f: File) {
    const formData = new FormData()
    formData.set("file", f)

    return this.http.post<any>('/upload', formData)
  }
}
