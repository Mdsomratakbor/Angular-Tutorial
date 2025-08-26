import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
export interface ContactForm {
  name: FormControl<string>;
  email: FormControl<string>;
  message: FormControl<string|null>;
}

export interface PhoneForm{
  phones: FormArray<FormControl<number|null>>
}
@Component({
  selector: 'app-typed-forms',
  standalone: false,
  templateUrl: './typed-forms.html',
  styleUrl: './typed-forms.scss'
})

export class TypedForms {
 contactForm: FormGroup<ContactForm>;
 phoneForm: FormGroup<PhoneForm>;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: new FormControl('', {nonNullable:true}),
      email: new FormControl('',   {validators: [Validators.required, Validators.email], nonNullable:true}),
      message: new FormControl('', {nonNullable:false})
    });

    this.phoneForm = this.fb.group({
      phones: this.fb.array([this.fb.control<number|null>(null, Validators.required)])
    })
  }

  onSubmitContact() {
    if (this.contactForm.valid) {
      const formValue = this.contactForm.value;
      console.log('Typed Form Value:', formValue);
    }
  }

  
  get phones(): FormArray<FormControl<number | null>> {
    return this.phoneForm.get('phones') as FormArray<FormControl<number | null>>;
  }

  addPhone() {
    this.phones.push(this.fb.control<number | null>(null, Validators.required));
  }

  removePhone(index: number) {
    this.phones.removeAt(index);
  }

  onSubmitPhones() {
    if (this.phoneForm.valid) {
      console.log(this.phoneForm.value);
    }
  }
}
