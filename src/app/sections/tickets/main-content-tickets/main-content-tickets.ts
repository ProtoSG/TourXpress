import { Component } from '@angular/core';
import { ListTickets } from '@components/tickets';
import { SectionContainer, TripInfoPanel } from '@components/UI';

@Component({
  selector: 'app-main-content-tickets',
  imports: [SectionContainer, TripInfoPanel, ListTickets],
  templateUrl: './main-content-tickets.html',
  styleUrl: './main-content-tickets.scss'
})
export class MainContentTickets {

}
