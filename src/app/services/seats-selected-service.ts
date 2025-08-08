import { inject, Injectable, signal } from '@angular/core';
import { LocalStorageService } from './local-storage-service';
import { Seat, SeatData } from '@models/seat.model';

@Injectable({
  providedIn: 'root'
})
export class SeatsSelectedService {
  private localStorageService = inject(LocalStorageService);

  seats =  signal<Seat[]>(this.localStorageService.loadFromLocalStorage("seats", []))

  cleanSeats() {
    this.seats.set([]);
    this.saveToStorage();
  }

  addSeat(seat: Seat) {
    this.seats.set([...this.seats(), seat]);
    this.saveToStorage();
  }

  removeSeat(id: number) {
    const updatedSeats = this.seats().filter(seat => seat.id !== id);
    this.seats.set(updatedSeats);
    this.saveToStorage();
  }

  updateSeat(id: number, passengerId: number) {
    const updatedSeats = this.seats().map(seat =>
      seat.id === id ? { ...seat, passengerId } : seat
    );
    this.seats.set(updatedSeats);
    this.saveToStorage();
  }

  private saveToStorage() {
    this.localStorageService.saveToLocalStorage("seats", this.seats());
  }
}
