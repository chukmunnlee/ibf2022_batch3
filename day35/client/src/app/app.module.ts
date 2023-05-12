import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RandomNumberService } from './services/random-number.service';
import { LoggerComponent } from './components/logger.component';

@NgModule({
  declarations: [
    AppComponent,
    LoggerComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ RandomNumberService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
