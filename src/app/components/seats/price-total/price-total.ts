import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { PrimaryButton } from '@components/UI';
import { SeatsSelectedService } from '@services/seats-selected-service';
import { TotalPriceService } from '@services/total-price-service';
import { ListSeatsSelected } from '../list-seats-selected/list-seats-selected';

@Component({
  selector: 'app-price-total',
  imports: [PrimaryButton, ListSeatsSelected],
  templateUrl: './price-total.html',
  styleUrl: './price-total.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PriceTotal {
  private seatsSelectedService = inject(SeatsSelectedService);
  private totalPriceService = inject(TotalPriceService);
  router = inject(Router)

  seats = computed(() => this.seatsSelectedService.seats())
  total = computed(() => this.totalPriceService.total())

  seatsFloor1 = computed(() =>
    this.seats().filter((seat) => seat.floor === 1)
  )

  seatsFloor2 = computed(() =>
    this.seats().filter((seat) => seat.floor === 2)
  )

  disabledBtn = computed(() => this.total() === 0);

  ngOnInit() {
    this.seatsSelectedService.cleanSeats();
    this.totalPriceService.cleanTotal();
  }

  handleConfirm = () => {
    this.router.navigate(['/passenger-details'])
  }
}
