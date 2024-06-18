import { Routes, RouterModule } from '@angular/router';
import { VivadetailsComponent } from './vivadetails.component';

const routes: Routes = [
  { path: '', component: VivadetailsComponent },
];

export const VivadetailsRoutes = RouterModule.forChild(routes);
