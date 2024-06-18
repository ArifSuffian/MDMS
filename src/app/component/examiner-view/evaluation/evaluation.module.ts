import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvaluationComponent } from './evaluation.component';
import { EvaluationRoutes } from './evaluation.routing';

@NgModule({
  imports: [
    CommonModule,
    EvaluationRoutes
  ],
  declarations: [EvaluationComponent]
})
export class EvaluationModule { }
