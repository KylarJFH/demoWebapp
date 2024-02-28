import { Component } from '@angular/core';

@Component({
  selector: 'app-gender-select',
  template: `
    <div id="button" (click)="isDropdownActive=true">
      <div style="display: flex; width: 100%; justify-content: space-between">
        {{ prefGender?.name || 'selectGender' | translate }}
        <span *ngIf="prefGender" (click)="clearSelection(); $event.stopImmediatePropagation()">x</span>
      </div>

      <div id="dropdown" [ngClass]="{ active: isDropdownActive }">
        <ul>
          <li *ngFor="let option of genderList">
            <a href="#" (click)="selectGender(option); isDropdownActive=false; $event.stopImmediatePropagation()"> {{ option.name | translate }}</a>
          </li>
        </ul>
      </div>
    </div>
  `,
  styleUrls: ['./gender-select.component.css']
})
export class GenderSelectComponent {
  isDropdownActive = false;
  prefGender: any;
  genderList = [
    { name: 'genderMale', value: 'male' },
    { name: 'genderFemale', value: 'female' },
    { name: 'genderOther', value: 'other' },
  ];
  
  selectGender(gender: any) {
    this.prefGender = gender;
  }

  clearSelection() {
    this.prefGender = undefined;
  }
}
