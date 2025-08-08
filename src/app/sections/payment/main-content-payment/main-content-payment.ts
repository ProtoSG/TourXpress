import { Component, computed, inject } from '@angular/core';
import { SectionContainer, TripInfoPanel, PrimaryButton } from '@components/UI';
import { SeatsSelectedService } from '@services/seats-selected-service';
import { TotalPriceService } from '@services/total-price-service';
import { PassengerDataService } from '@services/passenger-data-service';
import { Router } from '@angular/router';
import { TypeButton } from '@models/button.model';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { PaymentModal } from '@components/payment/payment-modal/payment-modal';

@Component({
  selector: 'app-main-content-payment',
  imports: [SectionContainer, TripInfoPanel, PrimaryButton, MatDialogModule],
  templateUrl: './main-content-payment.html',
  styleUrl: './main-content-payment.scss'
})
export class MainContentPayment {
  private seatsSelectedService = inject(SeatsSelectedService);
  private totalPriceService = inject(TotalPriceService);
  private passengerDataService = inject(PassengerDataService);
  private router = inject(Router);
  private dialog = inject(MatDialog);

  seats = computed(() => this.seatsSelectedService.seats());
  total = computed(() => this.totalPriceService.total());
  passengerData = computed(() => this.passengerDataService.getPassengerData()());

  typeBtn = TypeButton.BUTTON;

  getPassengerCount(): number {
    return this.seats().length;
  }

  getSeatNumbers(): string {
    return this.seats()
      .map(seat => seat.seatNumber.toString().padStart(2, '0'))
      .join(' ');
  }

  getSubtotal(): number {
    return this.total();
  }

  getTotal(): number {
    return this.total();
  }

  onPay = () => {
    const ref = this.dialog.open(PaymentModal, {
      data: { total: this.getTotal() },
      autoFocus: false,
    });

    ref.afterClosed().subscribe((result) => {
      if (result?.success) {
        this.router.navigate(['/']);
      }
    });
  }
}
