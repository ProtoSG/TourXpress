import { Component, computed, inject } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { NavigationParamsService } from '@services/navigation-params-service';

@Component({
  selector: 'app-back-button',
  imports: [],
  templateUrl: './back-button.html',
  styleUrl: './back-button.scss'
})
export class BackButton {
  private location = inject(Location);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private navigationParamsService = inject(NavigationParamsService);

  canGoBack = computed(() => {
    const path = this.location.path().split('?')[0];
    return path !== '/' && path !== '';
  });

  getPreviousStep(): { path: string; queryParams: any } {
    const path = this.location.path().split('?')[0];
    const currentQueryParams = this.route.snapshot.queryParams;
    
    const stepMap = new Map<string, { path: string; queryParams: any }>([
      ['/payment', { 
        path: '/passenger-details', 
        queryParams: {}
      }],
      ['/passenger-details', { 
        path: '/seats-selection', 
        queryParams: { 
          trip: currentQueryParams['trip'] || this.navigationParamsService.getSeatsParams().trip 
        }
      }],
      ['/seats-selection', { 
        path: '/results', 
        queryParams: this.getResultsParamsWithFallback(currentQueryParams)
      }],
      ['/results', { 
        path: '/', 
        queryParams: {}
      }],
    ]);

    const previousStep = stepMap.get(path) || { path: '/', queryParams: {} };
    console.log(`Navegando desde ${path} hacia ${previousStep.path} con params:`, previousStep.queryParams);
    return previousStep;
  }

  private getResultsParamsWithFallback(currentParams: any): any {
    if (currentParams.origin && currentParams.destination && currentParams.date) {
      return currentParams;
    }
    
    const savedParams = this.navigationParamsService.getSavedParams('/results');
    if (savedParams.origin && savedParams.destination && savedParams.date) {
      return savedParams;
    }
    
    return this.navigationParamsService.getResultsParams();
  }

  goBack() {
    if (this.canGoBack()) {
      const previousStep = this.getPreviousStep();
      this.router.navigate([previousStep.path], {
        queryParams: previousStep.queryParams
      });
    }
  }
}
