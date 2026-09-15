import { Component, inject, OnInit } from '@angular/core';
import { ExperienceService } from '../../core/services/experience';
import { ExperienceResponse } from '../../shared/models/experience-response.model';
import { JsonPipe } from '@angular/common';

@Component({
  imports: [JsonPipe],
  selector: 'app-experience',
  styleUrl: './experience.css',
  templateUrl: './experience.html',
})
export class Experience implements OnInit {
  private readonly experienceService = inject(ExperienceService);
  experienceResponse: ExperienceResponse[] = [];

  ngOnInit(): void {
    this.experienceService.getExperience().subscribe({
      next: res => {
        this.experienceResponse = res;
        console.log('values are : ', this.experienceResponse);

      },
      error: err => {
        console.error('Failed to fetch experience information : ', err);

      }
    });
  }
}
