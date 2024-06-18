import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  { 
    path: '', component: MainComponent,
   children: [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {
      path: 'progress',
      loadChildren: () =>
        import('../student-view/myprogress/myprogress.module').then((mod) => mod.MyprogressModule),
    },
  
    {
      path: 'submission',
      loadChildren: () =>
        import('../student-view/submission/submission.module').then((mod) => mod.SubmissionModule),
    },

    {
      path: 'projectlist',
      loadChildren: () =>
        import('../student-view/projectarchive/projectarchive.module').then((mod) => mod.ProjectArchivetModule),
    },

    {
      path: 'lecturerlist',
      loadChildren: () =>
        import('../student-view/lecturerlist/lecturerlist.module').then((mod) => mod.LecturerlistModule),
    },

    {
      path: 'vivadetails',
      loadChildren: () =>
        import('../examiner-view/vivadetails/vivadetails.module').then((mod) => mod.VivadetailsModule),
    },

    {
      path: 'studentprogress',
      loadChildren: () =>
        import('../lecturer-view/studentprogress/studentprogress.module').then((mod) => mod.StudentprogressModule),
    },

    {
      path: 'evaluation',
      loadChildren: () =>
        import('../examiner-view/evaluation/evaluation.module').then((mod) => mod.EvaluationModule),
    },
  
  
  ]
},

    
];

export const MainRoutes = RouterModule.forChild(routes);
