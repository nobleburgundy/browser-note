import { Component } from '@angular/core';
import { OfflineStorageServiceService } from './services/offline-storage-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  /**
   * 
   * @param offlineStorageService 
   */
  constructor(private offlineStorageService: OfflineStorageServiceService) {
    console.log("app comp ctor");
    const date = new Date().getUTCMilliseconds.toString();
    var testDoc = {
      "_id": date,
      "name": "Mittens " + date,
      "occupation": "kitten",
      "age": 3,
      "hobbies": [
        "playing with balls of yarn",
        "chasing laser pointers",
        "lookin' hella cute"
      ]
    };

    this.offlineStorageService.logDbInfo();
    this.offlineStorageService.put(testDoc);
  }
}
