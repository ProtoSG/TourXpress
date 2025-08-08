import { Component, computed, inject, OnInit } from '@angular/core';
import { SeatService } from '@services/seat-service';
import { TripSelectedService } from '@services/trip-selected-service';
import { ActivatedRoute } from '@angular/router';
import { SeatSelected } from '../seat-selected/seat-selected';
import { SeatNotSelected } from '../seat-not-selected/seat-not-selected';

@Component({
  selector: 'app-seat-selector',
  imports: [SeatSelected, SeatNotSelected],
  templateUrl: './seat-selector.html',
  styleUrl: './seat-selector.scss'
})
export class SeatSelector implements OnInit {
  private route = inject(ActivatedRoute);
  tripSelectedService = inject(TripSelectedService);
  seatService = inject(SeatService);

  trip = computed(() => this.tripSelectedService.trip());
  seats = computed(() => this.seatService.getFormattedSeats());

  tripId: number = 0;

  ngOnInit() {
    const queryParams = this.route.snapshot.queryParams;
    console.log("TRIP: ", this.trip().price)

    this.tripId = +queryParams['trip'] || 0;

    this.seatService.getSeatByBusId(this.tripId)
  }

  seatsFloor1 = computed(() =>
    this.seats().filter((seat) => seat.floor === 1)
  );
  seatsFloor2 = computed(() =>
    this.seats().filter((seat) => seat.floor === 2)
  );

  seatsFloor1Izq = computed(() =>
    this.seatsFloor1().filter((_, index) => (index + 1) % 3 !== 0)
  );
  seatsFloor1Der = computed(() =>
    this.seatsFloor1().filter((_, index) => (index + 1) % 3 === 0)
  );

  seatsFloor2Izq = computed(() =>
    this.seatsFloor2().filter((_, index) => !((index + 2) % 4 === 0 || (index + 1) % 4 === 0))
  );
  seatsFloor2Der = computed(() =>
    this.seatsFloor2().filter((_, index) => (index + 2) % 4 === 0 || (index + 1) % 4 === 0)
  );
}
