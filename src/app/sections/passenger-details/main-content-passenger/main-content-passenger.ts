import { Component } from '@angular/core';
import { SectionContainer, TripInfoPanel } from '@components/UI';
import { PassengerFormSection } from '../passenger-form/passenger-form';

@Component({
  selector: 'app-main-content-passenger',
  imports: [SectionContainer, TripInfoPanel, PassengerFormSection],
  templateUrl: './main-content-passenger.html',
  styleUrl: './main-content-passenger.scss'
})
export class MainContentPassenger {

}
