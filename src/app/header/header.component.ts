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
        <button (click)="translate.use('de')" id="button">
          <img src="../assets/img/de-flag.png" id="flag-img"/>
        </button>
        <button (click)="translate.use('en')" id="button">
          <img src="../assets/img/us-flag.png" id="flag-img"/>
        </button>
      </div>
    </div>
  `,
  styles: `
  #button {
    background: none;
    border: none;
    padding: 0 5;
    #flag-img {
      width: 45px;
      height: auto;
      border: 1px solid;
      border-radius: 5px;
      cursor: pointer;
      transition: filter 0.3s;
      &:hover {
        filter: brightness(0.8);
      }
    }
  }
  `
})

export class HeaderComponent {
  constructor(public translate: TranslateService) {
    translate.setDefaultLang('en');
  }
}
