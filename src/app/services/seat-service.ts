import { seatAdapter } from '@adapters/seat.adapter';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import { SeatBackend } from '@models/seat.model';

@Injectable({
  providedIn: 'root'
})
export class SeatService {
  private http =  inject(HttpClient);

  seats= signal(new Map<number, SeatBackend>())

  getFormattedSeats() {
    return Array.from(this.seats().values()).map(seatAdapter)
  }

  getSeatByBusId(id: number) {
    this.http.get<SeatBackend[]>(`${environment.apiUrl}/seat/bus/${id}`)
    .subscribe((seats) => {
      const newMap = new Map(seats.map(seat => [seat.seatID, seat]));
      this.seats.set(newMap);
    })
  }
}
