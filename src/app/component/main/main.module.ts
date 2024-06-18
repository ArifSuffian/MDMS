import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutes } from './main.routing';

@NgModule({
  imports: [
    CommonModule,
    MainRoutes
  ],
  declarations: [MainComponent]
})
export class MainModule { }
