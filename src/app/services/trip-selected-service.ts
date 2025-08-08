import { inject, Injectable, signal } from '@angular/core';
import { Trip } from '@models/trip.model';
import { LocalStorageService } from './local-storage-service';

@Injectable({
  providedIn: 'root'
})
export class TripSelectedService {
  private localStorageService = inject(LocalStorageService);
  trip = signal<Trip>(this.localStorageService.loadFromLocalStorage("trip", {} as Trip))

  clear() {
    this.trip.set({} as Trip)
    this.saveToStorage()
  }

  setTrip(trip: Trip) {
    this.trip.set(trip)
    this.saveToStorage()
  }

  private saveToStorage() {
    this.localStorageService.saveToLocalStorage("trip", this.trip())
  }
}
