import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor() { }
  toggleDarkMode(event: CustomEvent) {
    const isDark = event.detail.checked;
    document.documentElement.classList.toggle('ion-palette-dark', isDark);
  }
}
