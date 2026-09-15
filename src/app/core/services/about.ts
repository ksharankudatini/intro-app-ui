import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { AboutResponse } from "../../shared/models/about-response.model";

@Injectable({
    providedIn: 'root'
})

export class AboutService {
    private readonly http = inject(HttpClient);
    private readonly baseUrl = `${environment.apiBaseUrl}`;
    getAbout(): Observable<AboutResponse> {
        return this.http.get<AboutResponse>(`${this.baseUrl}/about`);
    }
}