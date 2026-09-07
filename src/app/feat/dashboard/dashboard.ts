import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { translate, TranslatePipe } from '@ngx-translate/core';
import { Header } from "../../shared/components/header/header";

@Component({
  imports: [Header, RouterOutlet, RouterLink, RouterLinkActive, TranslatePipe],
  selector: 'app-dashboard',
  styleUrl: './dashboard.css',
  templateUrl: './dashboard.html',
})
export class Dashboard {
  readonly title = translate('dashboard.title');
}
