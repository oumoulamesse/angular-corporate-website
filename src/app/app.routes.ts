import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },

  {
    path: 'services',
    loadComponent: () =>
      import('./pages/services/services.component')
        .then(m => m.ServicesComponent),
  },

  {
    path: 'services/web',
    loadComponent: () =>
      import('./pages/services/web/web/web.component')
        .then(m => m.WebComponent),
  } ,
   {
    path: 'services/coaching',
    loadComponent: () =>
      import('./pages/services/coaching/coaching/coaching.component')
        .then(m => m.CoachingComponent),
  } ,

  {
    path: 'solutions',
    loadComponent: () =>
      import('./pages/solutions/solutions.component')
        .then(m => m.SolutionsComponent)
  },

 {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component')
        .then(m => m.AboutComponent)
  },

  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component')
        .then(m => m.ContactComponent)
  }
];
