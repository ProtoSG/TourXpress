import { Component } from '@angular/core';
import { Carousel } from '@components/home';
import { SectionContainer } from '@components/UI';


@Component({
  selector: 'app-favorite-cities',
  imports: [SectionContainer, Carousel],
  templateUrl: './favorite-cities.html',
  styleUrl: './favorite-cities.scss'
})
export class FavoriteCities {
}
