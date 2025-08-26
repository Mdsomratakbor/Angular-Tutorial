import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  standalone: false,
  templateUrl: './reset-password.html',
  styleUrl: './reset-password.scss'
})
export class ResetPassword {
   resetForm: FormGroup;
    constructor(private fb: FormBuilder) {
    this.resetForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required]]
  }, { validator: this.passwordMatchValidator });
    }
  hidePassword = true;
  hideConfirmPassword = true;





  passwordMatchValidator(form: any) {
    return form.get('password')?.value === form.get('confirmPassword')?.value 
      ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.resetForm.valid) {
      console.log('Reset password data:', this.resetForm.value);
      // Call your API to reset password here
    } else {
      this.resetForm.markAllAsTouched();
    }
  }
}
