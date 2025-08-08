import { Component, inject, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { PrimaryButton } from '@components/UI';
import { Trip } from '@models/trip.model';
import { DetailsTerminal } from '../details-terminal/details-terminal';
import { Router } from '@angular/router';
import { TripInfoService } from '@services/trip-info-service';
import { TripSelectedService } from '@services/trip-selected-service';

@Component({
  selector: 'app-ticket-card',
  imports: [MatIconModule, PrimaryButton, DetailsTerminal],
  templateUrl: './ticket-card.html',
  styleUrl: './ticket-card.scss'
})
export class TicketCard {
  private router = inject(Router);
  private tripInfoService = inject(TripInfoService);
  private tripSelectedService = inject(TripSelectedService);

  trip = input<Trip>({} as Trip);

  selectTrip = () => {
    this.tripSelectedService.setTrip(this.trip());

    this.tripInfoService.setHour(this.trip().boarding.time);
    this.tripInfoService.setLocation(this.trip().boarding.location);
    this.tripInfoService.setTypeService(this.trip().service.name);


    this.router.navigate(['/seats-selection'], {
      queryParams: {
        trip: this.trip().id
      }
    })
  }
}
