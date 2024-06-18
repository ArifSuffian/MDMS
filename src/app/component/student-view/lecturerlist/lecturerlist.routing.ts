import { Routes, RouterModule } from '@angular/router';
import { LecturerlistComponent } from './lecturerlist.component';

const routes: Routes = [
  { path: '', component: LecturerlistComponent },
];

export const LecturerlistRoutes = RouterModule.forChild(routes);
