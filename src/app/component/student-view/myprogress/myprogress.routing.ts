import { Routes, RouterModule } from '@angular/router';
import { MyprogressComponent } from './myprogress.component';

const routes: Routes = [
  { path: '', component: MyprogressComponent},
];

export const MyprogressRoutes = RouterModule.forChild(routes);
