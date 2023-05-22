import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { MainComponent } from './components/main.component';
import { UppercaseComponent } from './components/uppercase.component';
import { UppercaseService } from './uppercase.service';

const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'uppercase', component: UppercaseComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UppercaseComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ UppercaseService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
