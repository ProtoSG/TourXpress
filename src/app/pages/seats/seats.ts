import { Component } from '@angular/core';
import { Footer, MainContainer } from '@components/UI';
import { HeaderSeats, MainContentSeats, ProgressStepsSeats } from '@sections/seats';

@Component({
  selector: 'app-seats',
  imports: [
    MainContainer,
    HeaderSeats,
    MainContentSeats,
    ProgressStepsSeats,
    Footer,
  ],
  templateUrl: './seats.html',
  styleUrl: './seats.scss'
})
export class Seats {

}
