import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { MainComponent } from './components/main.component';
import { WeatherComponent } from './components/weather.component';
import {WeatherService} from './weather.service';

const appRoutes: Routes = [
  { path: '', component: MainComponent, title: 'YAWA' },
  { path: 'weather/:city', component: WeatherComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent, WeatherComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ WeatherService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
