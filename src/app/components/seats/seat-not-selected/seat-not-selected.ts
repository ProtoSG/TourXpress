import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import { Seat } from '@models/seat.model';
import { SeatsSelectedService } from '@services/seats-selected-service';
import { TotalPriceService } from '@services/total-price-service';

@Component({
  selector: 'app-seat-not-selected',
  imports: [],
  templateUrl: './seat-not-selected.html',
  styleUrl: './seat-not-selected.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SeatNotSelected {
  tripPrice = input(0);
  private seatsSelectedService = inject(SeatsSelectedService);
  private totalPriceService = inject(TotalPriceService);

  seat = input<Seat>({} as Seat);

  selected = signal(false);
  priceTotal = computed(() =>  this.tripPrice() + this.seat().price);

  addSeat(){
    const isSelected = this.selected();

    if (isSelected) {
      this.selected.set(false);
      this.seatsSelectedService.removeSeat(this.seat().id);
      this.totalPriceService.decrement(this.priceTotal());
    } else {
      this.selected.set(true);
      this.seatsSelectedService.addSeat(this.seat());
      console.log("TOTAL:", this.priceTotal())
      this.totalPriceService.increment(this.priceTotal());
    }
  }
}
