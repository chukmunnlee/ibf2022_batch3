import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { MainComponent } from './components/main.component';
import { CartComponent } from './components/cart.component';
import { CartService } from './cart.service';
import { CartRepository } from './cart.repository';
import { ListComponent } from './components/list.component';

import { leaveComp, loginGuard } from './util';
import { DetailComponent } from './components/detail.component'

const appRoutes: Routes = [
  { path: '', component: MainComponent, title: 'Main' },

  { path: 'list', component: ListComponent, title: 'List', canActivate: [ loginGuard ] },

  { path: 'cart/:cartId', component: DetailComponent, canActivate: [ loginGuard ] },

  { path: 'cart', component: CartComponent, title: 'Cart'
      , canActivate: [ loginGuard ], canDeactivate: [ leaveComp ] },

  { path: '**', redirectTo: '/', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent, CartComponent, ListComponent, DetailComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, HttpClientModule,
    // bindToComponentInputs - V16
    RouterModule.forRoot(appRoutes, { useHash: true, bindToComponentInputs: true })
  ],
  providers: [ CartService, CartRepository ],
  bootstrap: [AppComponent]
})
export class AppModule { }
