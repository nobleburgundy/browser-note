import { Component } from '@angular/core';
import PouchDb from 'pouchdb';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public db: any;
  title = 'app';

  constructor() {
    this.db = new PouchDb("testing_pouchdb");
    this.db.info().then(function (info: any) {
      console.log("db info:", info);
    });
  }
}
