import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { environment } from "../../../environments/environment";
import { LoginRequest } from "../../shared/models/login-request.model";
import { LoginResponse } from "../../shared/models/login-response.model";

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    private readonly http = inject(HttpClient);
    private readonly baseUrl = `${environment.apiBaseUrl}`;
    private readonly tokenKey = 'auth_token';

    login(credentials: LoginRequest): Observable<LoginResponse> {
        return this.http.post<LoginResponse>(`${this.baseUrl}/login`, credentials).pipe(
            tap((res: LoginResponse) => this.token = res.token)
        )
    }

    private set token(token: string) {
        localStorage.setItem(this.tokenKey, token);
    }

    get token(): string | null {
        return localStorage.getItem(this.tokenKey);
    }

    isLoggedIn(): boolean {
        const token = this.token;
        if (!token) {
            return false;
        }
        return !this.isTokenExpired(token);
    }

    private isTokenExpired(token: string): boolean {
        try {
            const payload = JSON.parse(atob(token.split('.')[1]));
            const expiryMs = payload.exp * 1000;
            return Date.now() > expiryMs;
        } catch {
            return true;
        }
    }

    logout(): void {
        localStorage.removeItem(this.tokenKey);
    }
}