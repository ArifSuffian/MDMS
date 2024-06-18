import { Routes, RouterModule } from '@angular/router';
import { ProjectArchiveComponent} from './projectarchive.component';

const routes: Routes = [
  { path: '', component: ProjectArchiveComponent },
];

export const ProjectArchiveRoutes = RouterModule.forChild(routes);
