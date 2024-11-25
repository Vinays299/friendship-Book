import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 
  email: string = '';
  password: string = '';
  errorMessage: string | null = null;

  onLogin(form: NgForm): void {
    if (form.invalid) {
      this.errorMessage = 'Please fill out all fields correctly.';
      return;
    }

    
    if (this.email === 'test@example.com' && this.password === 'password123') {
      this.errorMessage = null;
      alert('Login successful!');
    } else {
      this.errorMessage = 'Invalid email or password.';
    }
  }
}
