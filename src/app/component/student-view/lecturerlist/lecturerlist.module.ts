import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { LecturerlistRoutes } from './lecturerlist.routing';
import { LecturerlistComponent } from './lecturerlist.component';


@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    LecturerlistRoutes
  ],
  declarations: [LecturerlistComponent] // Remove 'LecturerlistComponent' from the declarations array
})
export class LecturerlistModule { }
