import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportsComponent } from './reports/reports.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {
      text: 'Dashboard'
    }
  },
  {
    path: 'reports',
    component: ReportsComponent,
    data: {
      text: 'Reports'
    }
  },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
