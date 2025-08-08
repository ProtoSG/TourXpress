import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TypeButton } from '@models/button.model';

@Component({
  selector: 'app-primary-button',
  imports: [],
  templateUrl: './primary-button.html',
  styleUrl: './primary-button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrimaryButton {
  type= input(TypeButton.BUTTON);
  disabled = input(false);
  onClick = input(() => {});
}
