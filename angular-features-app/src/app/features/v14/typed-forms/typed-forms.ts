import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
export interface ContactForm {
  name: FormControl<string>;
  email: FormControl<string>;
  message: FormControl<string|null>;
}
@Component({
  selector: 'app-typed-forms',
  standalone: false,
  templateUrl: './typed-forms.html',
  styleUrl: './typed-forms.scss'
})

export class TypedForms {
 contactForm: FormGroup<ContactForm>;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: new FormControl('', {nonNullable:true}),
      email: new FormControl('', {nonNullable:true}),
      message: new FormControl('', {nonNullable:false})
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const formValue = this.contactForm.value;
      console.log('Typed Form Value:', formValue);
    }
  }
}
