import { Routes } from '@angular/router';
import { InjectionToken } from '@angular/core';

export const APP_CONFIG = new InjectionToken<string>('./app.config');

export const appRoutes: Routes = [
    { path: 'auth/v1', loadChildren: () => import('./auth/v1/auth.module').then(m => m.AuthModule) },
    { path: 'auth/v2', loadChildren: () => import('./auth/v2/auth.module').then(m => m.AuthModule) },
    { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];