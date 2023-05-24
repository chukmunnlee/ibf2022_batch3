import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';

import { WebcamModule } from 'ngx-webcam'

import { AppComponent } from './app.component';
import { MainComponent } from './components/main.component';
import { UploadComponent } from './components/upload.component';
import {PhotoService} from './photo.service';

const appRoute: Routes = [
  { path: '', component: MainComponent, title: 'Main' },
  { path: 'upload', component: UploadComponent, title: 'Upload' },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent, UploadComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule,
    RouterModule.forRoot(appRoute),
    WebcamModule
  ],
  providers: [ PhotoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
