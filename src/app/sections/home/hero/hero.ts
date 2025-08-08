import { Component } from '@angular/core';
import { ContentHero, DestinationCard } from '@components/home';
import { BgContainer, FormSearch, Header, SectionContainer } from '@components/UI';

@Component({
  selector: 'app-hero',
  imports: [
    Header,
    SectionContainer,
    ContentHero,
    DestinationCard,
    FormSearch,
    BgContainer
  ],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {

}
