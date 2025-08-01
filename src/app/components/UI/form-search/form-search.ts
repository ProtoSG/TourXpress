import { Component, inject } from '@angular/core';
import { InputSelect } from '../input-select/input-select';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { PrimaryButton } from '../primary-button/primary-button';
import { TypeButton } from '@models/button.model';
import { InputDate } from '../input-date/input-date';

interface ItemForm {
  origin: FormControl<number>;
  destination: FormControl<number>;
  startDate: FormControl<Date>;
  endDate: FormControl<Date>;
}

@Component({
  selector: 'app-form-search',
  imports: [
    InputSelect,
    ReactiveFormsModule,
    PrimaryButton,
    InputDate,
  ],
  templateUrl: './form-search.html',
  styleUrl: './form-search.scss'
})
export class FormSearch {
  typeBtn = TypeButton.SUBMIT;
  fb = inject(NonNullableFormBuilder);

  form: FormGroup<ItemForm> = this.fb.group<ItemForm>({
    origin: this.fb.control(0, { validators: [Validators.required ] }),
    destination: this.fb.control(0, { validators: [Validators.required ] }),
    startDate: this.fb.control(new Date, { validators: [Validators.required] }),
    endDate:this.fb.control(new Date, { validators: [Validators.required] })
  });

  onSubmit() {
    if (this.form.invalid){
      this.form.markAllAsTouched();
      return;
    }

    console.log(this.form.value);
  }
}
