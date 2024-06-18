import { Routes, RouterModule } from '@angular/router';
import { SubmissionComponent } from './submission.component';

const routes: Routes = [
  { path: '', component: SubmissionComponent },
];

export const SubmissionRoutes = RouterModule.forChild(routes);
