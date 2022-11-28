import { Component, EventEmitter, OnInit, Output, VERSION } from '@angular/core';
import { faTrash, faPencil } from '@fortawesome/free-solid-svg-icons';
import { BrowserNote, OfflineStorageService } from '../services/offline-storage-service.service';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css']
})
export class PreferencesComponent implements OnInit {
  version = 'Angular ' + VERSION.major;
  languages = ['Markdown', 'TypeScript', 'C#', 'JavaScript', 'Java', 'Text'];
  notes: Array<BrowserNote> = [];
  faTrash = faTrash;
  faPencil = faPencil;

  @Output()
  errorMessage = new EventEmitter<string>();

  constructor(private offlineStorageService: OfflineStorageService) { }

  ngOnInit(): void {
    this.offlineStorageService.getAll().then((result: any) => {
      this.notes = result.rows.map((e: { doc: any; }) => e.doc);
    });
  }

  /**
   * Deletes the given note and updates the local cache, which refreshes the page.
   * @param note The note to delete.
   */
  deleteNote(note: BrowserNote) {
    this.offlineStorageService.deleteById(note._id).then((result: any) => {
      console.log("deleteNote result", result);
      this.offlineStorageService.getAll().then((result: any) => {
        // update local cache of notes.
        this.notes = result.rows.map((rowDocs: { doc: BrowserNote; }) => rowDocs.doc);
        return result.rows.map((rowDocs: { doc: BrowserNote; }) => rowDocs.doc);
      });
    }).catch((error: any) => {
      console.error(error);
      this.errorMessage.emit(error);
    });
  }

  /**
 * Edits the given note and updates the local cache, which refreshes the page.
 * @param note The note to edit.
 */
  editNote(note: BrowserNote) {
    alert('not hookedup');
  }

  /**
   * Protected method to delete all documents. Must be confirmed by the user.
   */
  protected deleteAllDocs() {
    if (prompt("Are you sure you want to delete ALL notes? This action cannot be reversed. Type 'Yes' if you want to delete all notes.") === 'Yes') {
      this.offlineStorageService.deleteAll().then((result) => {
        console.log("deleteAllDoc result", result);
      }).catch((error: any) => {
        console.error(error);
        this.errorMessage.emit(error);
      });
    }
  }
}
