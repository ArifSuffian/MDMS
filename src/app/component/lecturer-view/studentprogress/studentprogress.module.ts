import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentprogressComponent } from './studentprogress.component';
import { StudentprogressRoutes } from './studentprogress.routing';

@NgModule({
  imports: [
    CommonModule,
    StudentprogressRoutes
  ],
  declarations: [StudentprogressComponent]
})
export class StudentprogressModule { }
