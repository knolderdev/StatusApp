import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLoaderComponent } from './Components/page-loader/page-loader.component';
import {CoreModule} from "../core/core.module";



@NgModule({
  declarations: [
    PageLoaderComponent
  ],
  exports: [
    PageLoaderComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ]
})
export class SharedModule { }
