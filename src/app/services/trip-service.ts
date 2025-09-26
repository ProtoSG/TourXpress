import { tripAdapter } from '@adapters/trip.adapter';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import { TripBackend } from '@models/trip.model';

@Injectable({
  providedIn: 'root'
})
export class TripService {
  private http = inject(HttpClient);

  trips = signal(new Map<number, TripBackend>())

  getFormattedTrips() {
    return Array.from(this.trips().values()).map(tripAdapter);
  }

  getTrip(origin: number, destination: number, date: string){
    const params = {
      origin: origin.toString(),
      destination: destination.toString(),
      date: date
    };

    this.http.get<TripBackend[]>(`${environment.apiUrl}/trip`, {params})
    .subscribe((trips) => {
      const newMap = new Map(trips.map(trip => [trip.tripID, trip]));
      this.trips.set(newMap);
    })
  }
}
