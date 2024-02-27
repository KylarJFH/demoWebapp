import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="navbar is-orange">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://www.bender.de/" target='_blank'>
          <img src="../assets/img/logo.png"/>
        </a>
        <button (click)="useLanguage('de')">
          <img src="../assets/img/de-flag.png" style="max-height: 35px;"/>
        </button>
        <button (click)="useLanguage('en')">
          <img src="../assets/img/us-flag.png" style="max-height: 35px;"/>
        </button>
      </div>
    </div>
  `,
  styles: ``
})
export class HeaderComponent {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }
  useLanguage(language: string): void {
    this.translate.use(language);
  }
}
