import { HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, throwError } from "rxjs";
import { AuthService } from "../services/auth";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
    const authService = inject(AuthService);
    const router = inject(Router);
    const token = authService.token;
    const isAuthUrl = req.url.includes('/login') || req.url.includes('/create-account') || req.url.includes('/home');
    if (token && !isAuthUrl) {
        req = req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        });
    }
    return next(req).pipe(
        catchError((err) => {
            // Handle the error here, e.g., log it or show a notification
            if (err.status === 401) {
                authService.logout();
                router.navigate(['/login']);
            }

            return throwError(() => err);
        })
    );
}