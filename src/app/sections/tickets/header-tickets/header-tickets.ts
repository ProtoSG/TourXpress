import { Component } from '@angular/core';
import { BgContainer, Header, SectionContainer, FormSearch } from '@components/UI';

@Component({
  selector: 'app-header-tickets',
  imports: [
    BgContainer,
    Header,
    SectionContainer,
    FormSearch
  ],
  templateUrl: './header-tickets.html',
  styleUrl: './header-tickets.scss'
})
export class HeaderTickets {

}
