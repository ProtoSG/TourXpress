import { Component, computed, inject } from '@angular/core';
import { SectionContainer, TripInfoPanel } from '@components/UI';
import { SeatsSelectedService } from '@services/seats-selected-service';

@Component({
  selector: 'app-summary-ticket-passenger',
  imports: [SectionContainer, TripInfoPanel],
  templateUrl: './summary-ticket-passenger.html',
  styleUrl: './summary-ticket-passenger.scss'
})
export class SummaryTicketPassenger {
  private seatsSelectedService = inject(SeatsSelectedService);
  seats = computed(() => this.seatsSelectedService.seats());
}


