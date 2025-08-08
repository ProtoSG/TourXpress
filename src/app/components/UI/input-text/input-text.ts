import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-input-text',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './input-text.html',
  styleUrl: './input-text.scss'
})
export class InputText {
  control = input.required<FormControl<string>>();
  label = input('');
  placeholder = input('');

  getErrorMessage(): string {
    const errors = this.control().errors;
    if (!errors) return '';

    const errorKeys = Object.keys(errors);
    const firstError = errorKeys[0];
    return this.errorMessage[firstError] || 'Error de validación';
  }

  errorMessage: Record<string, string> = {
    required: 'El campo es obligatorio',
    email: 'Ingresa un correo válido',
    minlength: 'El valor es muy corto',
    pattern: 'Formato inválido',
  };
}


