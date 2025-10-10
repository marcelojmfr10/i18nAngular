import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageSelectorComponent } from '../../components/language-selector/language-selector.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-products',
  imports: [RouterLink, LanguageSelectorComponent, TranslatePipe],
  templateUrl: './products.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProductsComponent {

  firstName = signal('Marcelo Fuentes');

}
