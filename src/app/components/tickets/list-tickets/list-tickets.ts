import { Component, computed, inject } from '@angular/core';
import { TripService } from '@services/trip-service';
import { TicketCard } from '../ticket-card/ticket-card';
import { ActivatedRoute } from '@angular/router';
import { TripInfoService } from '@services/trip-info-service';

@Component({
  selector: 'app-list-tickets',
  imports: [TicketCard],
  templateUrl: './list-tickets.html',
  styleUrl: './list-tickets.scss'
})
export class ListTickets {
  private route = inject(ActivatedRoute);
  private tripService = inject(TripService);
  private tripInfoService = inject(TripInfoService);

  trips = computed(() => this.tripService.getFormattedTrips());
  origin: number = 0;
  destination: number = 0;
  date: string = '';


  ngOnInit() {
    this.tripInfoService.clearLocation();
    this.tripInfoService.clearTypeService();
    this.tripInfoService.clearHour();

    const queryParams = this.route.snapshot.queryParams;

    this.origin = +queryParams['origin'] || 0;
    this.destination = +queryParams['destination'] || 0;
    this.date = queryParams['date'] || '';

    console.log('ListTickets params:', { origin: this.origin, destination: this.destination, date: this.date });

    if (this.origin && this.destination && this.date) {
      this.tripService.getTrip(this.origin, this.destination, this.date);
    } else {
      console.error('Missing required parameters for trip search:', { origin: this.origin, destination: this.destination, date: this.date });
    }
  }
}
