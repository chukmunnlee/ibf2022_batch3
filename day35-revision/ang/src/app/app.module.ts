import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './componets/hello.component';
import { MyService } from './my.service';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ MyService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
