import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PrimaryButton } from '@components/UI';
import { SeatsSelectedService } from '@services/seats-selected-service';
import { TotalPriceService } from '@services/total-price-service';
import { ListSeatsSelected } from '../list-seats-selected/list-seats-selected';
import { NavigationParamsService } from '@services/navigation-params-service';

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
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private navigationParamsService = inject(NavigationParamsService);

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
    // Guardar los parámetros actuales antes de navegar
    const currentParams = this.route.snapshot.queryParams;
    this.navigationParamsService.saveCurrentParams('/seats-selection', currentParams);
    
    this.router.navigate(['/passenger-details'])
  }
}
