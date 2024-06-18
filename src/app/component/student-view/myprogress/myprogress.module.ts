import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyprogressComponent } from './myprogress.component';
import { MyprogressRoutes } from './myprogress.routing';

@NgModule({
  imports: [
    CommonModule,
    MyprogressRoutes
  ],
  declarations: [MyprogressComponent]
})
export class MyprogressModule { }
