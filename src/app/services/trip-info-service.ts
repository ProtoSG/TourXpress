import { inject, Injectable, signal } from '@angular/core';
import { LocalStorageService } from './local-storage-service';

interface TripData {
  originName: string;
  destinationName: string;
  startDate: string;
  hour: string;
  location: string;
  typeService: string;
}

@Injectable({
  providedIn: 'root'
})
export class TripInfoService {
  localStorageService = inject(LocalStorageService);

  private tripData = signal<TripData | null>(this.localStorageService.loadFromLocalStorage("tripData", null));

  getTripData() {
    return this.tripData.asReadonly();
  }

  setTripData(data: TripData): void {
    this.localStorageService.saveToLocalStorage("tripData", data);
    this.tripData.set(data);
  }

  setOriginName(originName: string): void {
    const current = this.tripData();
    if (current) {
      const updated = { ...current, originName };
      this.updateTripData(updated);
    }
  }

  setDestinationName(destinationName: string): void {
    const current = this.tripData();
    if (current) {
      const updated = { ...current, destinationName };
      this.updateTripData(updated);
    }
  }

  setStartDate(startDate: string): void {
    const current = this.tripData();
    if (current) {
      const updated = { ...current, startDate };
      this.updateTripData(updated);
    }
  }

  setHour(hour: string): void {
    const current = this.tripData();
    if (current) {
      const updated = { ...current, hour };
      this.updateTripData(updated);
    }
  }

  setLocation(location: string): void {
    const current = this.tripData();
    if (current) {
      const updated = { ...current, location };
      this.updateTripData(updated);
    }
  }

  setTypeService(typeService: string): void {
    const current = this.tripData();
    if (current) {
      const updated = { ...current, typeService };
      this.updateTripData(updated);
    }
  }

  updateTripProperty<K extends keyof TripData>(property: K, value: TripData[K]): void {
    const current = this.tripData();
    if (current) {
      const updated = { ...current, [property]: value };
      this.updateTripData(updated);
    }
  }

  private updateTripData(data: TripData): void {
    this.localStorageService.saveToLocalStorage("tripData", data);
    this.tripData.set(data);
  }

  clearOrigin(): void {
    this.updateTripProperty('originName', '');
  }

  clearDestination(): void {
    this.updateTripProperty('destinationName', '');
  }

  clearDate(): void {
    this.updateTripProperty('startDate', '');
  }

  clearHour(): void {
    this.updateTripProperty('hour', '');
  }

  clearLocation(): void {
    this.updateTripProperty('location', '');
  }

  clearTypeService(): void {
    this.updateTripProperty('typeService', '');
  }

  clearAllData(): void {
    this.tripData.set(null);
    this.localStorageService.removeFromLocalStorage("tripData");
  }
}
