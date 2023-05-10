import { NgModule } from "@angular/core";

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'

const matModules: any[] = [
  MatToolbarModule, MatButtonModule, MatIconModule,
  MatInputModule, MatFormFieldModule
]

@NgModule({
  imports: matModules,
  exports: matModules
})
export class MaterialModule { }
