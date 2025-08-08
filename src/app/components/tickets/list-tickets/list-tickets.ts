import { Component, computed, inject } from '@angular/core';
import { TripService } from '@services/trip-service';
import { TicketCard } from '../ticket-card/ticket-card';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-tickets',
  imports: [TicketCard],
  templateUrl: './list-tickets.html',
  styleUrl: './list-tickets.scss'
})
export class ListTickets {
  private route = inject(ActivatedRoute);
  tripService = inject(TripService);

  trips = computed(() => this.tripService.getFormattedTrips());
  origin: number = 0;
  destination: number = 0;
  date: string = '';


  ngOnInit() {
    const queryParams = this.route.snapshot.queryParams;

    this.origin = +queryParams['origin'] || 0;
    this.destination = +queryParams['destination'] || 0;
    this.date = queryParams['date'] || '';

    this.tripService.getTrip(this.origin, this.destination, this.date)
  }
}
