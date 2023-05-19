import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListGamesComponent } from './components/list-games.component';
import { GamesService } from './games.service';

@NgModule({
  declarations: [
    AppComponent,
    ListGamesComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [ GamesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
