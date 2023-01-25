import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import {
  BrowserNote,
  OfflineStorageService,
} from 'src/app/services/offline-storage-service.service';

@Component({
  selector: 'app-existing-note-list',
  templateUrl: './existing-note-list.component.html',
  styleUrls: ['./existing-note-list.component.css'],
})
export class ExistingNoteListComponent implements OnInit {
  faTrash = faTrash;
  faPencil = faPencil;

  @Input()
  notes: Array<BrowserNote> = [];

  @Output()
  errorMessage = new EventEmitter<string>();

  constructor(private offlineStorageService: OfflineStorageService) {
    if (this.notes.length < 1) {
      this.offlineStorageService.getAll().then((result: any) => {
        console.log('result', result);

        if (result.rows.length > 0) {
          this.notes = result.rows
            .map((rowDocs: { doc: BrowserNote }) => rowDocs.doc)
            .sort((a: BrowserNote, b: BrowserNote) => {
              console.log(a);
              return (
                new Date(b.createdDate).getTime() -
                new Date(a.createdDate).getTime()
              );
            });
        }
      });
    }
  }

  ngOnInit(): void {}

  /**
   * Deletes the given note and updates the local cache, which refreshes the page.
   * @param note The note to delete.
   */
  deleteNote(note: BrowserNote) {
    if (confirm('Are you sure you want to delete this note?')) {
      this.offlineStorageService
        .deleteById(note._id)
        .then((result: any) => {
          console.log('deleteNote result', result);
          this.offlineStorageService.getAll().then((result: any) => {
            // update local cache of notes.
            this.notes = result.rows
              .map((rowDocs: { doc: BrowserNote }) => rowDocs.doc)
              .sort(
                (a: BrowserNote, b: BrowserNote) =>
                  new Date(b.createdDate).getTime() -
                  new Date(a.createdDate).getTime()
              );
          });
        })
        .catch((error: any) => {
          console.error(error);
          this.errorMessage.emit(error);
        });
    }
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
    if (
      prompt(
        "Are you sure you want to delete ALL notes? This action cannot be reversed. Type 'Yes' if you want to delete all notes."
      ) === 'Yes'
    ) {
      this.offlineStorageService
        .deleteAll()
        .then((result) => {
          console.log('deleteAllDoc result', result);
        })
        .catch((error: any) => {
          console.error(error);
          this.errorMessage.emit(error);
        });
    }
  }
}
