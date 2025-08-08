import { Component, input, InputSignal } from '@angular/core';
import { AbstractControl, FormControl, ReactiveFormsModule, ValidationErrors, ValidatorFn } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { City } from '@models/city.model';

@Component({
  selector: 'app-input-select',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  templateUrl: './input-select.html',
  styleUrl: './input-select.scss'
})
export class InputSelect {
  control = input.required<FormControl<number>>();
  label = input('');
  placeholder = input('')
  cities = input<City[]>([]);
  onChange: InputSignal<(id: number) => void> = input((id: number) => {});

  onSelectionChange(id: number) {
    this.onChange()(id);
  }

  getErrorMessage(): string {
    const errors = this.control().errors;
    if (!errors) return '';

    const errorKeys = Object.keys(errors);
    const firstError = errorKeys[0];
    return this.errorMessage[firstError] || 'Error de validación';
  }

  errorMessage: Record<string, string> = {
    required: 'El campo es obligatorio',
    min: 'El campo es obligatorio'
  }
}
