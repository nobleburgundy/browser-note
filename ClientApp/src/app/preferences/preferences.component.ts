import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  VERSION,
} from '@angular/core';
import { faTrash, faPencil } from '@fortawesome/free-solid-svg-icons';
import { BrowserNoteService } from '../services/browser-note.service';
import {
  BrowserNote,
  OfflineStorageService,
} from '../services/offline-storage-service.service';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css'],
})
export class PreferencesComponent implements OnInit {
  version = 'Angular ' + VERSION.major;
  languages = ['Markdown', 'TypeScript', 'C#', 'JavaScript', 'Java', 'Text'];
  notes: Array<BrowserNote> = [];
  faTrash = faTrash;
  faPencil = faPencil;

  @Output()
  errorMessage = new EventEmitter<string>();

  constructor(private noteRestService: BrowserNoteService) {}

  ngOnInit(): void {
    this.noteRestService.getNotes().subscribe((result: any) => {
      this.notes = result.map((e: { note: BrowserNote }) => e);
      // sort by createdDate desc
      // this.notes.sort((a: BrowserNote, b: BrowserNote) => b.createdDate.getTime() - a.createdDate.getTime());
    });
  }

  // /**
  //  * Deletes the given note and updates the local cache, which refreshes the page.
  //  * @param note The note to delete.
  //  */
  // deleteNote(note: BrowserNote) {
  //   this.noteRestService
  //     .deleteById(note._id)
  //     .then((result: any) => {
  //       console.log('deleteNote result', result);
  //       this.noteRestService.getAll().then((result: any) => {
  //         // update local cache of notes.
  //         this.notes = result.rows.map(
  //           (rowDocs: { doc: BrowserNote }) => rowDocs.doc
  //         );
  //         return result.rows.map(
  //           (rowDocs: { doc: BrowserNote }) => rowDocs.doc
  //         );
  //       });
  //     })
  //     .catch((error: any) => {
  //       console.error(error);
  //       this.errorMessage.emit(error);
  //     });
  // }

  // /**
  //  * Protected method to delete all documents. Must be confirmed by the user.
  //  */
  // protected deleteAllDocs() {
  //   if (
  //     prompt(
  //       "Are you sure you want to delete ALL notes? This action cannot be reversed. Type 'Yes' if you want to delete all notes."
  //     ) === 'Yes'
  //   ) {
  //     this.noteRestService
  //       .deleteAll()
  //       .then((result) => {
  //         console.log('deleteAllDoc result', result);
  //       })
  //       .catch((error: any) => {
  //         console.error(error);
  //         this.errorMessage.emit(error);
  //       });
  //   }
  // }
}
