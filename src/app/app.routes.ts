import { Routes } from '@angular/router';
import { Home, PassengerDetails, Seats, Tickets, Payment } from './pages';

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
  },
  {
    path: "payment",
    component: Payment
  }
];
