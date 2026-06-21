import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full',
  },
  {
    path: 'landing',
    loadComponent: () =>
      import('./pages/landing/landing.component').then(
        (m) => m.LandingComponent
      ),
  },
  {
    path: 'login',
    loadComponent: () => 
      import('./pages/login/login.component').then(
        (m) => m.LoginComponent
      ),
  },
  {
    path: 'register',
    loadComponent: () => 
      import('./pages/register/register.component').then(
        (m) => m.RegisterComponent
      ),
  },
  {
    path: 'dashboard',
    loadComponent: () => 
      import('./pages/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
  },
  {
    path: 'children',
    loadComponent: () => 
      import('./pages/children/children.component').then(
        (m) => m.ChildrenComponent
      ),
  },
  {
    path: 'child-details',
    loadComponent: () => 
      import('./pages/child-details/child-details.component').then(
        (m) => m.ChildDetailsComponent
      ),
  },
  {
    path: 'compaigns',
    loadComponent: () => 
      import('./pages/compaigns/compaigns.component').then(
        (m) => m.CompaignsComponent       
      ),
  },
]