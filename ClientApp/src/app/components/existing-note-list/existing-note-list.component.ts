import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { BrowserNote } from 'src/app/models/browser-note';
import { BrowserNoteService } from 'src/app/services/browser-note.service';

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

  constructor(private noteRestService: BrowserNoteService) {
    if (this.notes.length < 1) {
      this.noteRestService.getNotes().subscribe((result: any) => {
        console.log('result', result);

        if (result.length > 0) {
          this.notes = result.map((row: { note: BrowserNote }) => row);
        }
      });
    }
  }

  ngOnInit(): void {}

  alert(note?: BrowserNote) {
    console.log('not implemented', note ? note.id : '');
  }

  /**
   * Deletes the given note and updates the local cache, which refreshes the page.
   * @param note The note to delete.
   */
  deleteNote(note: BrowserNote) {
    this.noteRestService.deleteNote(note).subscribe((result: any) => {
      console.log('deleteNote result', result);
      this.noteRestService.getNotes().subscribe((result: any) => {
        // update local cache of notes.
        this.notes = result.map((row: { note: BrowserNote }) => row).sort();
      });
    });
  }

  // /**
  //  * Edits the given note and updates the local cache, which refreshes the page.
  //  * @param note The note to edit.
  //  */
  // editNote(note: BrowserNote) {
  //   alert('not hookedup');
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
  //     this.restService
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
