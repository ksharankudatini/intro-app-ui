import { Routes } from '@angular/router';
import { About } from './feat/about/about';
import { CreateAccount } from './feat/create-account/create-account';
import { Dashboard } from './feat/dashboard/dashboard';
import { Experience } from './feat/experience/experience';
import { Home } from './feat/home/home';
import { Login } from './feat/login/login';
import { Youtube } from './feat/youtube/youtube';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
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
        component: Dashboard,
        children: [
            {
                path: '',
                redirectTo: 'about',
                pathMatch: 'full'
            },
            {
                path: 'about',
                component: About
            },
            {
                path: 'experience',
                component: Experience
            },
            {
                path: 'youtube',
                component: Youtube
            }
        ]
    }
];
