import { Component, computed, inject, OnInit, effect } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryButton, InputDate, InputText } from '@components/UI';
import { SeatsSelectedService } from '@services/seats-selected-service';
import { PassengerDataService, PassengerData, ContactData } from '@services/passenger-data-service';
import { TypeButton } from '@models/button.model';
import { Router } from '@angular/router';

interface PassengerFormGroup {
  document: FormControl<string>;
  firstName: FormControl<string>;
  lastName: FormControl<string>;
  birthDate: FormControl<Date>;
  gender: FormControl<'F' | 'M'>;
}

interface ContactFormGroup {
  email: FormControl<string>;
  phone: FormControl<string>;
}

@Component({
  selector: 'app-passenger-form',
  imports: [ReactiveFormsModule, InputText, InputDate, PrimaryButton],
  templateUrl: './passenger-form.html',
  styleUrl: './passenger-form.scss'
})
export class PassengerFormSection implements OnInit {
  private fb = inject(NonNullableFormBuilder);
  private seatsSelectedService = inject(SeatsSelectedService);
  private passengerDataService = inject(PassengerDataService);
  private router = inject(Router);

  typeBtn = TypeButton.BUTTON;

  seats = computed(() => this.seatsSelectedService.seats());
  passengerData = computed(() => this.passengerDataService.getPassengerData()());

  passengerForms: FormGroup<PassengerFormGroup>[] = [];
  contactForm!: FormGroup<ContactFormGroup>;

  constructor() {
    // Efecto para reinicializar formularios cuando cambien los asientos
    effect(() => {
      const seats = this.seats();
  
      if (seats && seats.length > 0 && this.passengerForms.length !== seats.length) {
        this.initializeForms();
      }
    });
  }

  ngOnInit() {
    this.initializeForms();
  }

  private initializeForms() {
    const seats = this.seats();
    const savedData = this.passengerData();
    
    if (!seats || seats.length === 0) {
      console.log('No hay asientos seleccionados, no se pueden inicializar formularios');
      return;
    }
    
    console.log('Inicializando formularios con asientos:', seats.length);
    console.log('Datos guardados:', savedData);
    
    this.passengerForms = seats.map((seat, index) => {
      const savedPassenger = savedData?.passengers?.[index];
      return this.fb.group<PassengerFormGroup>({
        document: this.fb.control(savedPassenger?.document || '', { validators: [Validators.required] }),
        firstName: this.fb.control(savedPassenger?.firstName || '', { validators: [Validators.required] }),
        lastName: this.fb.control(savedPassenger?.lastName || '', { validators: [Validators.required] }),
        birthDate: this.fb.control(savedPassenger?.birthDate || new Date(), { validators: [Validators.required] }),
        gender: this.fb.control<'F' | 'M'>(savedPassenger?.gender || 'F', { validators: [Validators.required] }),
      });
    });

    this.contactForm = this.fb.group<ContactFormGroup>({
      email: this.fb.control(savedData?.contact?.email || '', { validators: [Validators.required, Validators.email] }),
      phone: this.fb.control(savedData?.contact?.phone || '', { validators: [Validators.required] }),
    });

    this.passengerForms.forEach((form, index) => {
      form.valueChanges.subscribe(value => {
        if (form.valid) {
          const passenger: PassengerData = {
            document: value.document || '',
            firstName: value.firstName || '',
            lastName: value.lastName || '',
            birthDate: value.birthDate || new Date(),
            gender: value.gender || 'F'
          };
          this.passengerDataService.updatePassenger(index, passenger);
        }
      });
    });

    this.contactForm.valueChanges.subscribe(value => {
      if (this.contactForm.valid) {
        const contact: ContactData = {
          email: value.email || '',
          phone: value.phone || ''
        };
        this.passengerDataService.setContact(contact);
      }
    });
  }

  onContinue = () => {
    const allValid = this.passengerForms.every((fg) => fg.valid) && this.contactForm.valid;
    if (!allValid) {
      this.passengerForms.forEach((fg) => fg.markAllAsTouched());
      this.contactForm.markAllAsTouched();
      return;
    }

    console.log('Datos de pasajeros guardados:', this.passengerData());
    this.router.navigate(['/payment']);
  }
}


