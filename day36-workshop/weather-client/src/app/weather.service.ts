import {HttpClient, HttpParams} from "@angular/common/http";
import {inject, Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {WeatherData} from "./models";

const URL = '/api/weather'

@Injectable()
export class WeatherService {

  http = inject(HttpClient)

  getWeather(city: string, units = 'metric'): Observable<WeatherData[]> {
    const params = new HttpParams()
        .set("city", city)
        .set("units", units)

    return this.http.get<WeatherData[]>(`${URL}`, { params })

  }
}
