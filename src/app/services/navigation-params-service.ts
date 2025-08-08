import { inject, Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage-service';

@Injectable({
  providedIn: 'root'
})
export class NavigationParamsService {
  private localStorageService = inject(LocalStorageService);

  getSeatsParams(): { trip: number } {
    const seats = this.localStorageService.loadFromLocalStorage("seats", []);
    if (seats.length > 0) {
      const tripId = seats[0].busId || 0;
      console.log('Obteniendo parámetros de asientos:', { trip: tripId });
      return { trip: tripId };
    }
    console.log('No hay asientos seleccionados, usando tripId: 0');
    return { trip: 0 };
  }

  getResultsParams(): { origin: number; destination: number; date: string } {
    const tripData = this.localStorageService.loadFromLocalStorage("tripData", {});
    
    // Intentar obtener los parámetros desde localStorage
    const origin = this.getCityIdByName(tripData.originName) || 0;
    const destination = this.getCityIdByName(tripData.destinationName) || 0;
    const date = tripData.startDate || '';

    console.log('Obteniendo parámetros de resultados:', { origin, destination, date });
    return { origin, destination, date };
  }

  private getCityIdByName(cityName: string): number {
    // Mapeo básico de nombres de ciudades a IDs
    // En una aplicación real, esto vendría de una API o base de datos
    const cityMap: { [key: string]: number } = {
      'LIMA': 1,
      'CUSCO': 2,
      'AREQUIPA': 3,
      'TRUJILLO': 4,
      'PIURA': 5,
      'CHICLAYO': 6,
      'TACNA': 7,
      'TARAPOTO': 8,
      'HUANCAYO': 9,
      'CAJAMARCA': 10
    };

    const cityId = cityMap[cityName?.toUpperCase()] || 0;
    console.log(`Mapeando ciudad "${cityName}" a ID: ${cityId}`);
    return cityId;
  }

  saveCurrentParams(path: string, params: any): void {
    console.log(`Guardando parámetros para ${path}:`, params);
    this.localStorageService.saveToLocalStorage(`navParams_${path}`, params);
  }

  getSavedParams(path: string): any {
    const params = this.localStorageService.loadFromLocalStorage(`navParams_${path}`, {});
    console.log(`Obteniendo parámetros guardados para ${path}:`, params);
    return params;
  }
}
