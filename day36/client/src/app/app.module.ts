import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { MainComponent } from './components/main.component';
import { BearComponent } from './components/bear.component';
import { NumberComponent } from './components/number.component';
import { NumberService } from './data.service';

const appRoutes: Routes = [
  { path: '', component: MainComponent, title: 'Main' },
  { path: 'bear', component: BearComponent, title: 'Bear' },
  { path: 'number/:num', component: NumberComponent },
  // { path: 'number', component: NumberComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent, BearComponent, NumberComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [ NumberService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
