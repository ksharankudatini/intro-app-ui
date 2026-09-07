import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavLink } from '../../models/nav-link.model';


@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
  readonly brand = 'IntroApp';
  readonly links: NavLink[] = [
    { label: 'Home', path: '/home' },
    { label: 'Login', path: '/login' },
    { label: 'Create Account', path: '/create-account' }
  ];
}
