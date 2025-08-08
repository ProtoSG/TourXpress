import { Component } from '@angular/core';
import { Footer, MainContainer } from '@components/UI';
import { HeaderTickets, MainContentTickets, ProgressStepsTickets } from '@sections/tickets';

@Component({
  selector: 'app-tickets',
  imports: [
    MainContainer,
    HeaderTickets,
    ProgressStepsTickets,
    MainContentTickets,
    Footer
  ],
  templateUrl: './tickets.html',
  styleUrl: './tickets.scss'
})
export class Tickets {

}
