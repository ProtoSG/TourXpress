import { Component, computed, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

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
  }
]

@Component({
  selector: 'app-destination-card',
  imports: [MatIconModule],
  templateUrl: './destination-card.html',
  styleUrl: './destination-card.scss'
})
export class DestinationCard {
  currentPosition = signal(0);
  currentCard = computed(() => CONTENTCARD[this.currentPosition()]);

  nextCard() {
    const next = (this.currentPosition() + 1) % CONTENTCARD.length;
    this.currentPosition.set(next);
  }
}
