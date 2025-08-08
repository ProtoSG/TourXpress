import { Component } from '@angular/core';
import { PriceTotal, SeatSelector } from '@components/seats';
import { SectionContainer, TripInfoPanel } from '@components/UI';

@Component({
  selector: 'app-main-content-seats',
  imports: [SectionContainer, TripInfoPanel, SeatSelector, PriceTotal],
  templateUrl: './main-content-seats.html',
  styleUrl: './main-content-seats.scss'
})
export class MainContentSeats {

}
