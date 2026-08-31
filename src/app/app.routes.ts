import { Routes } from '@angular/router';
import { Login } from './feat/login/login';
import { Home } from './feat/home/home';
import { CreateAccount } from './feat/create-account/create-account';

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
    }
];
