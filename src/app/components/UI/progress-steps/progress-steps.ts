import { Location } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { BackButton } from '../back-button/back-button';

@Component({
  selector: 'app-progress-steps',
  imports: [BackButton],
  templateUrl: './progress-steps.html',
  styleUrl: './progress-steps.scss'
})
export class ProgressSteps {
  private location = inject(Location);
  totalSteps:number = 4;
  progress = signal(this.getProgressFromPath());
  progressPercentage = computed(() => (this.progress() / this.totalSteps) * 100);

  private getProgressFromPath(): number {
    const path = this.location.path().split('?')[0];

    const progressMap = new Map<string, number>([
      ['/results', 1],
      ['/seats-selection', 2],
      ['/passenger-details', 3],
      ['/payment', 4],
    ]);

    return progressMap.get(path) ?? 0;
  }
}
