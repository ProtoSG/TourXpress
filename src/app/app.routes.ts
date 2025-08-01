import { Routes } from '@angular/router';
import { Home, PassengerDetails, Seats, Tickets } from './pages';

export const routes: Routes = [
  {
    path: "",
    component: Home
  },
  {
    path: "tickets",
    component: Tickets
  },
  {
    path: "seats",
    component: Seats
  },
  {
    path: "passenger-details",
    component: PassengerDetails
  }
];
