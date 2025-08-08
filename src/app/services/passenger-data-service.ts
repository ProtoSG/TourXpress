import { inject, Injectable, signal } from '@angular/core';
import { LocalStorageService } from './local-storage-service';

export interface PassengerData {
  document: string;
  firstName: string;
  lastName: string;
  birthDate: Date;
  gender: 'F' | 'M';
}

export interface ContactData {
  email: string;
  phone: string;
}

export interface PassengerFormData {
  passengers: PassengerData[];
  contact: ContactData;
}

@Injectable({
  providedIn: 'root'
})
export class PassengerDataService {
  private localStorageService = inject(LocalStorageService);

  private passengerData = signal<PassengerFormData>(this.localStorageService.loadFromLocalStorage("passengerData", {
    passengers: [],
    contact: {
      email: '',
      phone: ''
    }
  }));

  getPassengerData() {
    return this.passengerData.asReadonly();
  }

  setPassengerData(data: PassengerFormData): void {
    this.localStorageService.saveToLocalStorage("passengerData", data);
    this.passengerData.set(data);
  }

  setPassengers(passengers: PassengerData[]): void {
    const current = this.passengerData();
    const updated = { ...current, passengers };
    this.setPassengerData(updated);
  }

  setContact(contact: ContactData): void {
    const current = this.passengerData();
    const updated = { ...current, contact };
    this.setPassengerData(updated);
  }

  updatePassenger(index: number, passenger: PassengerData): void {
    const current = this.passengerData();
    const updatedPassengers = [...current.passengers];
    updatedPassengers[index] = passenger;
    const updated = { ...current, passengers: updatedPassengers };
    this.setPassengerData(updated);
  }

  addPassenger(passenger: PassengerData): void {
    const current = this.passengerData();
    const updatedPassengers = [...current.passengers, passenger];
    const updated = { ...current, passengers: updatedPassengers };
    this.setPassengerData(updated);
  }

  removePassenger(index: number): void {
    const current = this.passengerData();
    const updatedPassengers = current.passengers.filter((_, i) => i !== index);
    const updated = { ...current, passengers: updatedPassengers };
    this.setPassengerData(updated);
  }

  clearPassengerData(): void {
    this.passengerData.set({
      passengers: [],
      contact: {
        email: '',
        phone: ''
      }
    });
    this.localStorageService.removeFromLocalStorage("passengerData");
  }
}
