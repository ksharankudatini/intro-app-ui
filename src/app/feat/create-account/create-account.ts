import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { translate, TranslatePipe } from '@ngx-translate/core';
import { Header } from "../../shared/components/header/header";

@Component({
  imports: [ReactiveFormsModule, Header, TranslatePipe],
  selector: 'app-create-account',
  styleUrl: './create-account.css',
  templateUrl: './create-account.html',
})
export class CreateAccount {
  private readonly fb = inject(FormBuilder);
  readonly title = translate('createAccount.title');

  createAccountForm = this.fb.group({
    name: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', Validators.required],
    contactNumber: ['', Validators.required]
  });

  onSubmit(): void {
    if (this.createAccountForm.invalid) {
      this.createAccountForm.markAllAsTouched();
      return;
    }
    console.log(this.createAccountForm.value);
    // TODO: call auth service here
  }
}
