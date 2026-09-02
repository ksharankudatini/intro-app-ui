import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { translate, TranslatePipe } from '@ngx-translate/core';
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

  loginForm = this.fb.group({
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
  }
}