import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent   // ← Accueil = Home
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./pages/services/services.component')
        .then(m => m.ServicesComponent)
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
