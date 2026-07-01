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
        (m) => m.LandingComponent,
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./pages/register/register.component').then(
        (m) => m.RegisterComponent,
      ),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent,
      ),
  },
  {
    path: 'children',
    loadComponent: () =>
      import('./pages/children/children.component').then(
        (m) => m.ChildrenComponent,
      ),
  },
  {
    path: 'child-details/:id',
    loadComponent: () =>
      import('./pages/child-details/child-details.component').then(
        (m) => m.ChildDetailsComponent,
      ),
  },
  {
    path: 'campaigns',
    loadComponent: () =>
      import('./pages/campaigns/campaigns.component').then(
        (m) => m.CampaignsComponent,
      ),
  },
  {
    path: 'add-child',
    loadComponent: () =>
      import('./pages/add-child/add-child.component').then(
        (m) => m.AddChildComponent,
      ),
  },
    {
    path: 'add-vaccine/:id',
    loadComponent: () =>
      import('./pages/add-vaccine/add-vaccine.component').then(
        (m) => m.AddVaccineComponent,
      ),
  },
];
