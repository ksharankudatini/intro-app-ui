import { Component, inject, OnInit } from '@angular/core';
import { YoutubeService } from '../../core/services/youtube';
import { YoutubeResponse } from '../../shared/models/youtube-response.model';

@Component({
  imports: [],
  selector: 'app-youtube',
  styleUrl: './youtube.css',
  templateUrl: './youtube.html',
})
export class Youtube implements OnInit {
  private readonly youtubeService = inject(YoutubeService);
  youtubeVideos!: YoutubeResponse[];

  // youtubeVideos = toSignal(this.youtubeService.getYoutubeVideos(), { initialValue: [] });

  ngOnInit(): void {
    this.youtubeService.getYoutubeVideos().subscribe({
      next: res => {
        this.youtubeVideos = res;
        console.log('Values are : ', this.youtubeVideos);
      },
      error: err => {
        console.error('Error fetching YouTube videos:', err);
      }
    });
  }
}
