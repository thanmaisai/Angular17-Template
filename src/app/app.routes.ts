import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'dashboard', 
    pathMatch: 'full' 
  },
  { 
    path: 'dashboard', 
    component: DashboardComponent,
    title: 'Dashboard - Sambo Admin'
  },
  { 
    path: 'users', 
    loadComponent: () => import('./components/users/users.component').then(m => m.UsersComponent),
    title: 'Users - Sambo Admin'
  },
  { 
    path: 'transactions', 
    loadComponent: () => import('./components/transactions/transactions.component').then(m => m.TransactionsComponent),
    title: 'Transactions - Sambo Admin'
  },
  { 
    path: 'analytics', 
    loadComponent: () => import('./components/analytics/analytics.component').then(m => m.AnalyticsComponent),
    title: 'Analytics - Sambo Admin'
  },
  { 
    path: '**', 
    redirectTo: 'dashboard' 
  }
];
