import {NgModule} from "@angular/core";

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatButtonModule } from '@angular/material/button'

const matModule: any[] = [
  MatToolbarModule, MatIconModule, MatInputModule,
  MatFormFieldModule, MatButtonModule
]

@NgModule({
  imports: matModule,
  exports: matModule
})

export class MaterialModule { }
