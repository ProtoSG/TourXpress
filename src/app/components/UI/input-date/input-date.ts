import { Component, input } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-input-date',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    FormsModule,
  ],
  templateUrl: './input-date.html',
  styleUrl: './input-date.scss',
})
export class InputDate {
  control = input.required<FormControl<Date>>();
  parentForm = input<FormGroup>();
  label = input('');

  getErrorMessage(): string {
    const controlErrors = this.control().errors;

    if (controlErrors){
      const errorKeys = Object.keys(controlErrors);
      const firstError = errorKeys[0];
      return this.errorMessage[firstError] || 'Error de validación';
    }

    return '';
  }

  errorMessage: Record<string, string> = {
    required: 'El campo es obligatorio',
  };
}
