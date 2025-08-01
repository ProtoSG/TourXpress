import { Component } from '@angular/core';
import { SectionContainer } from '@components/UI';

const PAYMENTS = [
  {
    src: "assets/mastercard.png",
    alt: "Mastercad"
  },
  {
    src: "assets/visa.png",
    alt: "Visa"
  },
  {
    src: "assets/plin.png",
    alt: "Plin"
  },
  {
    src: "assets/yape.png",
    alt: "Yape"
  }
]

@Component({
  selector: 'app-payments',
  imports: [SectionContainer],
  templateUrl: './payments.html',
  styleUrl: './payments.scss'
})
export class Payments {
  payments = PAYMENTS
}
