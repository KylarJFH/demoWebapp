import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import defaultLanguage from "./../assets/i18n/en.json";
import { GenderSelectComponent } from './gender-select/gender-select.component';

@Component({
  selector: 'app-root',
  template: `
    <app-header/>
    <div style="display: flex; align-items: flex-start; flex-direction: column">
      <div>
        <h1>{{ 'welcomeMessage' | translate: {title: 'Demo Web App', gender: genderSelect?.prefGender?.value, surname: surname, username: username} }}</h1>
        <p>{{ 'numberOfNewMessages' | translate: {count: newMessages} }}</p>
      </div>
      <app-gender-select/>
      <label for="username">Username:</label>
        <input type="text" id="username" [(ngModel)]="username">
        <label for="surname">Surname:</label>
        <input type="text" id="surname" [(ngModel)]="surname">
    </div>
    
    <router-outlet/>
  `,
  styles: []
})

export class AppComponent implements AfterViewInit {
  username: any;
  surname: any;
  newMessages: number;

  constructor(private translate: TranslateService) {
    translate.setTranslation('en', defaultLanguage);
    translate.setDefaultLang('en');
    this.newMessages = this.getRandomInt(0, 5);
  }

  @ViewChild(GenderSelectComponent) genderSelect!: GenderSelectComponent;
  ngAfterViewInit() {
    console.log(this.genderSelect.prefGender);
  }

  getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

// export class AppComponent {
//   username = 'Kylar';
//   newMessages = 1;

//   constructor(private translate: TranslateService) {
//     translate.setDefaultLang('en');
//     translate.use('en');
//   }
// }
