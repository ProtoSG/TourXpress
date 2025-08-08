import { Routes } from '@angular/router';
import { Home, PassengerDetails, Seats, Tickets } from './pages';

export const routes: Routes = [
  {
    path: "",
    component: Home
  },
  {
    path: "results",
    component: Tickets
  },
  {
    path: "seats-selection",
    component: Seats
  },
  {
    path: "passenger-details",
    component: PassengerDetails
  }
];
