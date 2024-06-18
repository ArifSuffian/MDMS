import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectArchiveComponent } from './projectarchive.component';
import { ProjectArchiveRoutes } from './projectarchive.routing';

@NgModule({
  imports: [
    CommonModule,
    ProjectArchiveRoutes
  ],
  declarations: [ProjectArchiveComponent]
})
export class ProjectArchivetModule { }
