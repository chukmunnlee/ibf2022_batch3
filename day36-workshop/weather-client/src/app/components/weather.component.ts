import { Component, inject, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {WeatherData} from '../models';
import {WeatherService} from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  activateRoute = inject(ActivatedRoute)
  title = inject(Title)
  weatherSvc = inject(WeatherService)

  city = ''
  weather$!: Observable<WeatherData[]>

  ngOnInit(): void {

    this.city = this.activateRoute.snapshot.params['city']
    const units = this.activateRoute.snapshot.queryParams['units'] || 'metric'

    this.title.setTitle(`YAWA: ${this.city}`)

    this.weather$ = this.weatherSvc.getWeather(this.city, units)

  }

}
