import { Routes } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { LoginComponent } from './core/login/login.component';
import { AuthService } from './core/auth.service';
import { inject } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canMatch: [
      () => {
        inject(AuthService).isLoggedIn;
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];
