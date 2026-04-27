import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Custom validator: no spaces allowed in username
function noSpacesValidator(control: AbstractControl): ValidationErrors | null {
  return control.value && /\s/.test(control.value) ? { noSpaces: true } : null;
}

// Custom validator: password must contain at least one number
function hasNumberValidator(control: AbstractControl): ValidationErrors | null {
  return control.value && !/\d/.test(control.value) ? { hasNumber: true } : null;
}

// Cross-field validator: confirm password must match password
function passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
  const pw = group.get('password')?.value;
  const cpw = group.get('confirmPassword')?.value;
  return pw && cpw && pw !== cpw ? { passwordMismatch: true } : null;
}

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.html'
})
export class ReactiveForm {
  submitted = false;

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      username: ['', [Validators.required, noSpacesValidator]],
      age: [null, [Validators.required, Validators.min(18), Validators.max(99)]],
      passwords: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(6), hasNumberValidator]],
        confirmPassword: ['', Validators.required]
      }, { validators: passwordMatchValidator })
    });
  }

  get name() { return this.form.get('name')!; }
  get email() { return this.form.get('email')!; }
  get phone() { return this.form.get('phone')!; }
  get username() { return this.form.get('username')!; }
  get age() { return this.form.get('age')!; }
  get passwords() { return this.form.get('passwords') as FormGroup; }
  get password() { return this.passwords.get('password')!; }
  get confirmPassword() { return this.passwords.get('confirmPassword')!; }

  isInvalid(control: AbstractControl): boolean {
    return control.invalid && (control.touched || this.submitted);
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      alert('Reactive Form submitted successfully!');
      this.form.reset();
      this.submitted = false;
    }
  }
}
