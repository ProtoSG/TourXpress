import { Component } from '@angular/core';
import { Footer, MainContainer } from '@components/UI';
import { HeaderPayment, ProgressStepsPayment, MainContentPayment } from '@sections/payment';

@Component({
  selector: 'app-payment',
  imports: [
    MainContainer,
    HeaderPayment,
    ProgressStepsPayment,
    MainContentPayment,
    Footer
  ],
  templateUrl: './payment.html',
  styleUrl: './payment.scss'
})
export class Payment {

}
