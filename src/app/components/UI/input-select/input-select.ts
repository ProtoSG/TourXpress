import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

export const CITIES = [
  {
    id: 1,
    name: "lima"
  },
  {
    id: 2,
    name: "trujillo"
  }
]

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
  control = input(new FormControl);
  label = input('');
  placeholder = input('')

  cities = CITIES;
}
