import { Routes, RouterModule } from '@angular/router';
import { StudentprogressComponent } from './studentprogress.component';

const routes: Routes = [
  { path: '', component: StudentprogressComponent },
];

export const StudentprogressRoutes = RouterModule.forChild(routes);
