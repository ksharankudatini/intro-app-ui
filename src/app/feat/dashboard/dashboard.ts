import { Component, signal } from '@angular/core';
import { Header } from "../../shared/components/header/header";

@Component({
  imports: [Header],
  selector: 'app-dashboard',
  styleUrl: './dashboard.css',
  templateUrl: './dashboard.html',
})
export class Dashboard {
  readonly title = signal('Dashboard');
}
