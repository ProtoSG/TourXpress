import { inject, Injectable, signal } from '@angular/core';
import { LocalStorageService } from './local-storage-service';

@Injectable({
  providedIn: 'root'
})
export class TotalPriceService {
  localStorageService = inject(LocalStorageService);

  total = signal(
    this.localStorageService.loadFromLocalStorage("total", 0)
  )

  cleanTotal() {
    this.total.set(0);
    this.saveToStorage();
  }

  increment(mount: number) {
    const newTotal = this.total() + mount;
    console.log(newTotal)
    this.total.set(newTotal);
    this.saveToStorage();
  }

  decrement(mount: number) {
    const newTotal = this.total() - mount;
    if (newTotal < 0) {
      console.error("Total cannot be less than 0")
      return;
    }
    this.total.set(newTotal);
    this.saveToStorage();
  }

  private saveToStorage() {
    this.localStorageService.saveToLocalStorage("total", this.total());
  }
}
