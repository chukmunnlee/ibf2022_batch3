import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {ReactiveFormsModule} from '@angular/forms';
import { ShareComponent } from './components/share.component';

@NgModule({
  declarations: [
    AppComponent, ShareComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    MaterialModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
