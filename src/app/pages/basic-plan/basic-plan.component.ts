import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { LanguageSelectorComponent } from "../../components/language-selector/language-selector.component";
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-basic-plan',
  imports: [RouterLink, LanguageSelectorComponent, TranslatePipe],
  templateUrl: './basic-plan.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BasicPlanComponent {

  firstName = signal('Marcelo Fuentes');
 }
