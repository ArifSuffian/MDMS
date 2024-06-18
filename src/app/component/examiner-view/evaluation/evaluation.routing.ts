import { Routes, RouterModule } from '@angular/router';
import { EvaluationComponent } from './evaluation.component';

const routes: Routes = [
  { path: '', component: EvaluationComponent  },
];

export const EvaluationRoutes = RouterModule.forChild(routes);
