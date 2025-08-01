import { Component } from '@angular/core';

interface ItemSN {
  icon: string;
  link: string;
  label: string;
}

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  socialNetworks: ItemSN[] = [
    {
      icon: 'assets/icons/facebook.svg',
      label: 'facebook',
      link: 'https://www.facebook.com'
    },
    {
      icon: 'assets/icons/instagram.svg',
      label: 'instagram',
      link: 'https://www.instagram.com'
    },
      {
      icon: 'assets/icons/youtube.svg',
      label: 'youtube',
      link: 'https://www.youtube.com'
    },
  ]
}
