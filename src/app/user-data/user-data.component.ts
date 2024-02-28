import { Component } from '@angular/core';

@Component({
  selector: 'app-user-data',
  template: `
    <div id="div-text1">
      <label for="username">Username:</label>
      <input type="text" id="username" [(ngModel)]="username">
      <label for="surname">Surname:</label>
      <input type="text" id="surname" [(ngModel)]="surname">
    </div>
  `,

  styles: ``
})

export class UserDataComponent {
  username: any;
  surname: any;

}
