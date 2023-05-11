import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputComponent } from './components/input.component';
import { DisplayComponent } from './components/display.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JokesComponent } from './components/jokes.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    DisplayComponent,
    JokesComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
