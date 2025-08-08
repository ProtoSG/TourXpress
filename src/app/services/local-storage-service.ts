import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object){
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  loadFromLocalStorage = <T>(key: string, defaultValue: T) => {
    if (this.isBrowser){
      const storageValue = window.localStorage.getItem(key);
      return storageValue ? JSON.parse(storageValue) : defaultValue;
    }
  }

  saveToLocalStorage = (key:string, value: any) => {
    if (this.isBrowser){
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  }

  removeFromLocalStorage = (key: string) => {
    if (this.isBrowser){
      window.localStorage.removeItem(key);
    }
  }
}
