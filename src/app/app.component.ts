import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pwa-example';
  // tslint:disable-next-line:no-inferrable-types
  public update: boolean = false;

  constructor(updates: SwUpdate) {
    updates.available.subscribe(event => {
        updates.activateUpdate().then(() => document.location.reload);
    });
  }

}
