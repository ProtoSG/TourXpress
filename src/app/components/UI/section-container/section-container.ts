import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-container',
  imports: [],
  templateUrl: './section-container.html',
  styleUrl: './section-container.scss'
})
export class SectionContainer {
  customClass = input('')
}
