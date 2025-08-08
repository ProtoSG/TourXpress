import { Component, computed, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TripInfoService } from '@services/trip-info-service';

@Component({
  selector: 'app-trip-info-panel',
  imports: [MatIconModule],
  templateUrl: './trip-info-panel.html',
  styleUrl: './trip-info-panel.scss'
})
export class TripInfoPanel {
  tripInfoService = inject(TripInfoService);

  tripData = computed(() => this.tripInfoService.getTripData()());

  originName = computed(() => this.tripData()?.originName || '');
  destinationName = computed(() => this.tripData()?.destinationName || '');
  startDate = computed(() => this.tripData()?.startDate || '');
  hour = computed(() => this.tripData()?.hour || '');
  location = computed(() => this.tripData()?.location || '');
  typeService = computed(() => this.tripData()?.typeService || '');

  date = computed(() => this.formatDate(this.startDate()));

  formatDate = (dateString: string): string => {
    if (!dateString) return "";
    const date = new Date(dateString);

    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
    };

    const formattedDate = new Intl.DateTimeFormat('es-ES', options).format(date);

    return formattedDate;
  };
}
