import { Component } from '@angular/core';
import { defineCustomElements } from '@ionic/pwa-elements/loader';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor() {
    defineCustomElements(window);
   }

  toggleDarkMode(event: CustomEvent) {
    const isDark = event.detail.checked;
    document.documentElement.classList.toggle('ion-palette-dark', isDark);
  }
  
}

