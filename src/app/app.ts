import { Component, effect, Inject, inject, Optional, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SsrCookieService } from 'ngx-cookie-service-ssr';
import { LanguageService, SERVER_LANG_TOKEN } from './services/language.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('i18n-app');

  cookie = inject(SsrCookieService);
  languageService = inject(LanguageService);

  constructor(
    @Optional()
    @Inject(SERVER_LANG_TOKEN)
    langServer: string,
  ) {
    console.log({ langServer });
    console.log({ cookie: this.cookie.check('lang') });

    const lang = langServer ?? (this.cookie.check('lang') ? this.cookie.get('lang') : 'en');
    this.languageService.changeLang(lang);
  }
}
