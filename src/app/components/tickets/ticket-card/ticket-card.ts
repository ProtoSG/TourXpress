import { Component, inject, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { PrimaryButton } from '@components/UI';
import { Trip } from '@models/trip.model';
import { DetailsTerminal } from '../details-terminal/details-terminal';
import { Router, ActivatedRoute } from '@angular/router';
import { TripInfoService } from '@services/trip-info-service';
import { TripSelectedService } from '@services/trip-selected-service';
import { NavigationParamsService } from '@services/navigation-params-service';

@Component({
  selector: 'app-ticket-card',
  imports: [MatIconModule, PrimaryButton, DetailsTerminal],
  templateUrl: './ticket-card.html',
  styleUrl: './ticket-card.scss'
})
export class TicketCard {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private tripInfoService = inject(TripInfoService);
  private tripSelectedService = inject(TripSelectedService);
  private navigationParamsService = inject(NavigationParamsService);

  trip = input<Trip>({} as Trip);

  selectTrip = () => {
    this.tripSelectedService.setTrip(this.trip());

    this.tripInfoService.setHour(this.trip().boarding.time);
    this.tripInfoService.setLocation(this.trip().boarding.location);
    this.tripInfoService.setTypeService(this.trip().service.name);

    // Guardar los parámetros actuales antes de navegar
    const currentParams = this.route.snapshot.queryParams;
    this.navigationParamsService.saveCurrentParams('/results', currentParams);

    this.router.navigate(['/seats-selection'], {
      queryParams: {
        trip: this.trip().id
      }
    })
  }
}
