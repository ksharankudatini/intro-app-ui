import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs";
import { ExperienceResponse } from "../../shared/models/experience-response.model";

@Injectable({
    providedIn: 'root'
})

export class ExperienceService {
    private readonly http = inject(HttpClient);
    private readonly baseUrl = `${environment.apiBaseUrl}`;

    getExperience(): Observable<ExperienceResponse[]> {
        return this.http.get<ExperienceResponse[]>(`${this.baseUrl}/experience`);
    }

}