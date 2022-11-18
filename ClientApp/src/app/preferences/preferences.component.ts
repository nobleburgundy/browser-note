import { Component, OnInit, VERSION } from '@angular/core';
import { BrowserNote, OfflineStorageService } from '../services/offline-storage-service.service';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css']
})
export class PreferencesComponent implements OnInit {
  version = 'Angular ' + VERSION.major;
  languages = ['Markdown', 'TypeScript', 'C#', 'JavaScript', 'Java', 'Text'];
  notes!: Array<BrowserNote>;

  constructor(private offlineStorageService: OfflineStorageService) {

  }

  ngOnInit(): void {
    this.offlineStorageService.getAll().then((result: any) => {
      this.notes = result.rows.map((e: { doc: any; }) => e.doc);
      console.log("this.notes in prefs comp:", this.notes);
    });
  }

  deleteAllDocs() {
    console.log("deleteAllDoc() called");

    if (prompt("Are you sure you want to delete ALL notes? This action cannot be reversed. Type 'Yes' if you want to delete all notes.") === 'Yes') {
      this.offlineStorageService.deleteAll().then((result) => {
        console.log("deleteAllDoc result", result);
      });
    }
  }
}
