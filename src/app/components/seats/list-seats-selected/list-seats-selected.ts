import { Component, input } from '@angular/core';
import { Seat } from '@models/seat.model';

@Component({
  selector: 'app-list-seats-selected',
  imports: [],
  templateUrl: './list-seats-selected.html',
  styleUrl: './list-seats-selected.scss'
})
export class ListSeatsSelected {
  seats = input<Seat[]>([]);
  floor = input<string>('');
}
