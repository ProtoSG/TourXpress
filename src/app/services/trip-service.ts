import { tripAdapter } from '@adapters/trip.adapter';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import { TripBackend } from '@models/trip.model';
import { catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TripService {
  private http = inject(HttpClient);

  trips = signal(new Map<number, TripBackend>())

  getFormattedTrips() {
    return Array.from(this.trips().values()).map(tripAdapter);
  }

  private formatDateForBackend(dateStr: string): string {
    // Ensure the date is in YYYY-MM-DD format
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(dateStr)) {
      console.warn('Date format may be incorrect:', dateStr);
    }
    return dateStr;
  }

  getTrip(origin: number, destination: number, date: string){
    if (!date || date === '' || date === 'Invalid Date') {
      console.error('Invalid date provided:', date);
      return;
    }
    
    const formattedDate = this.formatDateForBackend(date);
    
    const params = {
      origin: origin.toString(),
      destination: destination.toString(),
      date: formattedDate
    };

    this.http.get<TripBackend[]>(`${environment.apiUrl}/trip`, {params})
      .pipe(
        catchError(error => {
          console.error('Error loading trips:', error);
          return of([]);
        })
      )
      .subscribe((trips) => {
        const newMap = new Map(trips.map(trip => [trip.tripID, trip]));
        this.trips.set(newMap);
      })
  }
}
