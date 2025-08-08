import { Component, input } from '@angular/core';
import { Seat } from '@models/seat.model';
import { SeatNotSelected } from '../seat-not-selected/seat-not-selected';
import { SeatSelected } from '../seat-selected/seat-selected';

@Component({
  selector: 'app-render-seats',
  imports: [SeatNotSelected, SeatSelected],
  // templateUrl: './render-seats.html',
  template: `
    @for (seat of seats(); track seat.id) {
      @if (seat.availability === 0) {
        <app-seat-selected />
      } @else {
        <app-seat-not-selected [seat]="seat" />
      }
    }
  `,
  styleUrl: './render-seats.scss'
})
export class RenderSeats {
  seats = input<Seat[]>([]);
}
