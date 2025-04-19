import { Routes } from '@angular/router';
import { InjectionToken } from '@angular/core';

export const APP_CONFIG = new InjectionToken<string>('./app.config');

export const appRoutes: Routes = [
    { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
    { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];