import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { YoutubeResponse } from "../../shared/models/youtube-response.model";

@Injectable({
    providedIn: 'root'
})

export class YoutubeService {
    private readonly http = inject(HttpClient);
    private readonly baseUrl = `${environment.apiBaseUrl}`;

    getYoutubeVideos(): Observable<YoutubeResponse[]> {
        return this.http.get<YoutubeResponse[]>(`${this.baseUrl}/youtube`);
    }
}