import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PicFrameComponent } from './components/pic-frame.component';
import { PicCarouselComponent } from './components/pic-carousel.component';
import { NumsComponent } from './components/nums.component';

@NgModule({
  declarations: [
    AppComponent, PicFrameComponent, PicCarouselComponent, NumsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
