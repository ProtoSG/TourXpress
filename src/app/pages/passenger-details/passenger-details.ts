import { Component } from '@angular/core';
import { Footer, MainContainer } from '@components/UI';
import { HeaderPassenger, ProgressStepsPassenger, MainContentPassenger } from '@sections/passenger-details';

@Component({
  selector: 'app-passenger-details',
  imports: [
    MainContainer,
    HeaderPassenger,
    ProgressStepsPassenger,
    MainContentPassenger,
    Footer
  ],
  templateUrl: './passenger-details.html',
  styleUrl: './passenger-details.scss'
})
export class PassengerDetails {

}
