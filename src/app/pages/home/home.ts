import { Component } from '@angular/core';
import { Footer, Header, MainContainer } from '@components/UI';
import { FavoriteCities, Hero, Payments } from '@sections/home';

@Component({
  selector: 'app-home',
  imports: [MainContainer, Hero, Payments, FavoriteCities, Footer],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
