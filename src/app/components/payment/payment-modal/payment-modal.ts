import { Component, inject, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ReactiveFormsModule, NonNullableFormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { InputText, PrimaryButton } from '@components/UI';

interface CardForm {
  cardNumber: FormControl<string>;
  expiry: FormControl<string>;
  cvv: FormControl<string>;
  firstName: FormControl<string>;
  lastName: FormControl<string>;
  email: FormControl<string>;
}

@Component({
  selector: 'app-payment-modal',
  imports: [MatDialogModule, ReactiveFormsModule, InputText, PrimaryButton],
  templateUrl: './payment-modal.html',
  styleUrl: './payment-modal.scss'
})
export class PaymentModal {
  private dialogRef = inject(MatDialogRef<PaymentModal>);
  data: { total: number } = inject(MAT_DIALOG_DATA);
  private fb = inject(NonNullableFormBuilder);

  method = signal<'card' | 'qr' | 'yape'>('card');
  orderId = Math.floor(Date.now() / 1000);

  form: FormGroup<CardForm> = this.fb.group<CardForm>({
    cardNumber: this.fb.control('', { validators: [Validators.required, Validators.minLength(13), Validators.maxLength(19)] }),
    expiry: this.fb.control('', { validators: [Validators.required] }),
    cvv: this.fb.control('', { validators: [Validators.required, Validators.minLength(3), Validators.maxLength(4)] }),
    firstName: this.fb.control('', { validators: [Validators.required] }),
    lastName: this.fb.control('', { validators: [Validators.required] }),
    email: this.fb.control('', { validators: [Validators.required, Validators.email] }),
  });

  close() {
    this.dialogRef.close();
  }

  selectMethod(m: 'card' | 'qr' | 'yape') {
    this.method.set(m);
  }

  pay = () => {
    if (this.method() === 'card') {
      if (this.form.invalid) {
        this.form.markAllAsTouched();
        return;
      }
    }
    this.dialogRef.close({ success: true, method: this.method(), payload: this.form.getRawValue() });
  }
}
