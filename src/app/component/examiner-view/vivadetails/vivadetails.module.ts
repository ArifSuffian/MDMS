import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VivadetailsComponent } from './vivadetails.component';
import { VivadetailsRoutes } from './vivadetails.routing';

@NgModule({
  imports: [
    CommonModule,
    VivadetailsRoutes
  ],
  declarations: [VivadetailsComponent]
})
export class VivadetailsModule { }
