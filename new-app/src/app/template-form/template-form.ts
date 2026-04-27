import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './template-form.html'
})
export class TemplateForm {
  submitted = false;
  formData = {
    name: '',
    email: '',
    age: null as number | null,
    password: '',
    confirmPassword: '',
    username: ''
  };

  // Banned usernames for custom validation demo
  bannedUsernames = ['admin', 'root', 'superuser'];

  isBannedUsername(value: string): boolean {
    return this.bannedUsernames.includes(value?.toLowerCase());
  }

  passwordMismatch(form: NgForm): boolean {
    const pw = form.controls['password'];
    const cpw = form.controls['confirmPassword'];
    if (!pw || !cpw) return false;
    return pw.value !== cpw.value && (cpw.dirty || cpw.touched);
  }

  onSubmit(form: NgForm) {
    this.submitted = true;
    if (form.valid && !this.passwordMismatch(form)) {
      alert('Template Form submitted successfully!');
      form.resetForm();
      this.submitted = false;
    }
  }
}
