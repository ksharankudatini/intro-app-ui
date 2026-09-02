import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { translate, TranslatePipe } from '@ngx-translate/core';
import { Header } from '../../shared/components/header/header';

@Component({
  imports: [RouterLink, Header, TranslatePipe],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  readonly title = translate('home.title');
}
