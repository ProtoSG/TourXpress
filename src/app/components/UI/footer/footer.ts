import { Component } from '@angular/core';
import { FacebookIcon, InstagramIcon, YoutubeIcon } from '@icons/index';

interface ItemSN {
  icon: string;
  name: string;
  link: string;
}

@Component({
  selector: 'app-footer',
  imports: [
    FacebookIcon,
    InstagramIcon,
    YoutubeIcon,
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  socialNetworks: ItemSN[] = [
    {
      name: 'facebook',
      icon: 'app-facebook-icon',
      link: 'https://www.facebook.com'
    },
    {
      name: 'instagram',
      icon: 'app-instagram-icon',
      link: 'https://www.instagram.com'
    },
      {
      name: 'youtube',
      icon: 'app-youtube-icon',
      link: 'https://www.youtube.com'
    },
  ]
}
