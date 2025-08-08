import { Component, computed, inject, Signal } from '@angular/core';
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
import { RouteService } from '@services/route-service';
import { City } from '@models/city.model';
import { Router } from '@angular/router';
import { TripInfoService } from '@services/trip-info-service';
import { TripService } from '@services/trip-service';

interface ItemForm {
  origin: FormControl<number>;
  destination: FormControl<number>;
  startDate: FormControl<Date>;
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
  router = inject(Router)

  form: FormGroup<ItemForm> = this.fb.group<ItemForm>({
    origin: this.fb.control(0, { validators: [Validators.required, Validators.min(1) ] }),
    destination: this.fb.control(0, { validators: [Validators.required, Validators.min(1) ] }),
    startDate: this.fb.control(new Date(), { validators: [Validators.required] }),
  });

  cityService = inject(RouteService);
  citiesOrigin: Signal<City[]> = computed(() =>  this.cityService.getFormattedCitiesOrigin());
  citiesDestination: Signal<City[]> = computed(() =>  this.cityService.getFormattedCitiesDestination());

  tripInfoService = inject(TripInfoService);
  tripService = inject(TripService);

  onSubmit() {
    if (this.form.invalid){
      this.form.markAllAsTouched();
      return;
    }

    const formValue = this.form.getRawValue();

    const originCity = this.findCityById(formValue.origin, this.citiesOrigin());
    const destinationCity = this.findCityById(formValue.destination, this.citiesDestination());

    if (!originCity || !destinationCity) {
      console.error("No found names of cities");
      return;
    }

    const dateStr = formValue.startDate.toISOString().split('T')[0];

    this.tripInfoService.setTripData({
      originName: originCity.name,
      destinationName: destinationCity.name,
      startDate: dateStr,
      hour: '',
      location: '',
      typeService: ''
    })

    this.tripService.getTrip(formValue.origin, formValue.destination, dateStr);

    this.router.navigate(['/results'], {
      queryParams: {
        origin: formValue.origin,
        destination: formValue.destination,
        date: dateStr,
      }
    });
  }

  findCityById(id: number, cities: City[]): City | undefined {
    return cities.find((c) => c.id === id);
  }

  getDestinationsCity = (id: number)  => {
    this.cityService.getCitiesDestination(id)
  }
}
