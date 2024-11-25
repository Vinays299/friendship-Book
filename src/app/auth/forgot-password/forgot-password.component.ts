import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {

  email: string = '';
  dob: string = '';
  errorMessage: string | null = null;
  successMessage: string | null = null;

  onSubmit(form: NgForm): void {
  
    this.errorMessage = null;
    this.successMessage = null;

    if (form.invalid) {
      this.errorMessage = 'Please fill out all fields correctly.';
      return;
    }

    if (this.email && this.dob) {
      this.successMessage = 'Password reset instructions have been sent to your email.';
    } else {
      this.errorMessage = 'Please fill in all required fields.';
    }
  }
}
