import { Component, input } from '@angular/core';

@Component({
  selector: 'app-details-terminal',
  imports: [],
  templateUrl: './details-terminal.html',
  styleUrl: './details-terminal.scss'
})
export class DetailsTerminal {
  type = input('');
  hour = input('');
  location = input('');
}
