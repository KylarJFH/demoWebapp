import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { GenderSelectComponent } from './gender-select/gender-select.component';
import { UserDataComponent } from './user-data/user-data.component';

@Component({
  selector: 'app-root',
  template: `
    <app-header/>
    <div id="div-text">
      <div>
        <h1>{{ 'welcomeMessage' | translate: {title: 'Demo Web App', gender: genderSelect?.prefGender?.value, surname: userData?.surname, username: userData?.username} }}</h1>
        <p>{{ 'numberOfNewMessages' | translate: {count: newMessages} }}</p>
      </div>
      <div id="div-text1">
        <app-gender-select/>
        <app-user-data/>
      </div>
    </div>
    
    <app-footer/>
    <router-outlet/>
  `,
  
  styles: ``
})

export class AppComponent implements AfterViewInit {
  newMessages: number;

  constructor() {
    this.newMessages = this.getRandomInt(0, 5);
  }

  @ViewChild(GenderSelectComponent) genderSelect!: GenderSelectComponent;
  @ViewChild(UserDataComponent) userData!: UserDataComponent;

  ngAfterViewInit() {
    console.log(this.genderSelect.prefGender);
    console.log(this.userData.username);
    console.log(this.userData.surname);
  }

  getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}