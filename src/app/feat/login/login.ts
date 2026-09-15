import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { translate, TranslatePipe } from '@ngx-translate/core';
import { AuthService } from '../../core/services/auth';
import { Header } from '../../shared/components/header/header';

@Component({
  imports: [ReactiveFormsModule, Header, TranslatePipe],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})

export class Login {
  private readonly fb = inject(FormBuilder);
  readonly title = translate('login.title');
  private readonly router = inject(Router);
  private readonly authService = inject(AuthService);

  loginForm = this.fb.nonNullable.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    console.log(this.loginForm.value);
    // TODO: call auth service here

    const credentials = this.loginForm.getRawValue();

    this.authService.login(credentials).subscribe({
      next: res => {
        console.log('Login successful : ', res);
        this.router.navigate(['/dashboard']); // Navigate to the dashboard or desired route
      },
      error: err => {
        console.error('Login failed : ', err);
      }
    });
  }
}