import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { CityBackend } from '@models/city.model';
import { cityAdapter } from '@adapters/city.adapter';
import { environment } from '@environments/environment';
import { catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  private http = inject(HttpClient);

  citiesOrigin = signal(new Map<number, CityBackend>());
  citiesDestination = signal(new Map<number, CityBackend>());

  constructor() {
    this.getCitiesOrigin();
  }

  getFormattedCitiesOrigin() {
    return Array.from(this.citiesOrigin().values()).map(cityAdapter);
  }

  getFormattedCitiesDestination() {
    return Array.from(this.citiesDestination().values()).map(cityAdapter);
  }

  getCitiesOrigin() {
    this.http.get<CityBackend[]>(`${environment.apiUrl}/route/origins-city`)
      .pipe(
        catchError(error => {
          console.error('Error loading origin cities:', error);
          return of([]);
        })
      )
      .subscribe((cities) => {
        const newMap = new Map(cities.map(city => [city.cityID, city]));
        this.citiesOrigin.set(newMap);
      });
  }

  getCitiesDestination(originId: number) {
    this.http.get<CityBackend[]>(`${environment.apiUrl}/route/destinations-city/${originId}`)
      .pipe(
        catchError(error => {
          console.error('Error loading destination cities:', error);
          return of([]);
        })
      )
      .subscribe((cities) => {
        const newMap = new Map(cities.map(city => [city.cityID, city]));
        this.citiesDestination.set(newMap);
      });
  }
}
