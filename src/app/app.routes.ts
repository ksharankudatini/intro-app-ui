import { Routes } from '@angular/router';
import { CreateAccount } from './feat/create-account/create-account';
import { Dashboard } from './feat/dashboard/dashboard';
import { Home } from './feat/home/home';
import { Login } from './feat/login/login';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: Home
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: 'create-account',
        component: CreateAccount
    },
    {
        path: 'dashboard',
        component: Dashboard
    }
];
