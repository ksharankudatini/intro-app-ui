import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { AboutService } from '../../core/services/about';
import { AboutResponse } from '../../shared/models/about-response.model';

@Component({
  imports: [CommonModule],
  selector: 'app-about',
  styleUrls: ['./about.css'],
  templateUrl: './about.html',
})
export class About implements OnInit {
  private readonly aboutService = inject(AboutService);
  aboutResponse!: AboutResponse;
  ngOnInit() {
    this.aboutService.getAbout().subscribe({
      next: res => {
        this.aboutResponse = res;
        console.log('Values are : ', this.aboutResponse);
      },
      error: err => {
        console.error('Failed to fetch about information : ', err);
      }
    });
  }
}
