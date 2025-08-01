import { Component } from '@angular/core';

interface ItemCard {
  city: string;
  name: string;
  image: string;
}

const CONTENTCARD: ItemCard[] = [
  {
    city: "Cusco",
    name: "Machupicchu",
    image: "assets/cusco.png"
  },
  {
    city: "Ica",
    name: "La ciudad de Ica",
    image: "assets/Ica.jpg"
  },
  {
    city: "Cusco",
    name: "La montaña de 7 colores",
    image: "assets/colores.png"
  },
  {
    city: "Cusco",
    name: "Machupicchu",
    image: "assets/cusco.png"
   },
   {
    city: "Ica",
    name: "La ciudad de Ica",
    image: "assets/Ica.jpg"
   },
   {
    city: "Cusco",
    name: "La montaña de 7 colores",
    image: "assets/colores.png"
   },
]

@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss'
})
export class Carousel {
  itemsCard = CONTENTCARD;
}
