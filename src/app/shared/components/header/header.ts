import { Component, input } from '@angular/core';

@Component({
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  readonly title = input.required<string>();
}
