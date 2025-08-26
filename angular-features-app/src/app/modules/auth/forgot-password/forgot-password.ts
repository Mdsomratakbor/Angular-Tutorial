import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  standalone: false,
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.scss'
})
export class ForgotPassword {
 forgotForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialize the form inside the constructor
    this.forgotForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.forgotForm.valid) {
      console.log('Reset link sent to:', this.forgotForm.value.email);
      // TODO: Call backend API to send reset link
    }
  }
}
