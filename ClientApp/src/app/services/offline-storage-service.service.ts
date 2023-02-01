// import { Injectable, OnInit } from '@angular/core';
// // import PouchDB from 'pouchdb';

// @Injectable({
//   providedIn: 'root',
// })
export class OfflineStorageService {
  //   private db: any;
  //   private readonly db_name = 'browser_notes_db';
  //   private readonly db_address = 'http://localhost:5984/' + this.db_name;
  //   private notesArray: Array<BrowserNote> = [];
  //   constructor() {
  //     if (this.db?.db_name !== this.db_name) {
  //       this.db = new PouchDB(this.db_address, {
  //         auth: { username: 'admin', password: '_couchdb*9982Jimi7603' },
  //       });
  //     }
  //   }
  //   ngOnInit(): void {
  //     console.log('offline storage service oninit called');
  //   }
  //   /**
  //    * Logs the DB info to the console.
  //    */
  //   logDbInfo() {
  //     console.log('logDbInfo called');
  //     this.db.info().then(function (info: any) {
  //       console.log('db info:', info);
  //     });
  //   }
  //   /**
  //    * Get all notes.
  //    *
  //    * @returns An promise containing an array of all the notes.
  //    */
  //   getAll(): Promise<Array<BrowserNote>> {
  //     return this.db
  //       .allDocs({ include_docs: true })
  //       .then((result: BrowserNote) => {
  //         return result;
  //       })
  //       .catch((error: BrowserNote) => {
  //         console.error(error);
  //       });
  //   }
  //   /**
  //    * Get the note by id.
  //    *
  //    * @param id The id of the note.
  //    * @returns
  //    */
  //   getById(id: string): Promise<BrowserNote> {
  //     return this.db
  //       .get(id)
  //       .then((doc: any) => {
  //         return doc;
  //       })
  //       .catch((error: any) => {
  //         console.error(error);
  //       });
  //   }
  //   /**
  //    * Saves the given note to offline storage.
  //    * @param note
  //    * @returns
  //    */
  //   put(note: any): Promise<string> {
  //     console.log('offlinestorage put called', note);
  //     return this.db
  //       .put(note)
  //       .then((result: any) => {
  //         return result;
  //       })
  //       .catch((error: any) => {
  //         console.error(error);
  //       });
  //   }
  //   /**
  //    * Delete the note with the given id.
  //    *
  //    * @param id The id of the note to delete.
  //    * @returns
  //    */
  //   deleteById(id: string): Promise<string> {
  //     return this.db.get(id).then((doc: any) => {
  //       return this.db.remove(doc);
  //     });
  //   }
  //   /**
  //    * Delete all the notes.
  //    *
  //    * @returns A promise containing the result message or error.
  //    */
  //   deleteAll(): Promise<string> {
  //     return this.db
  //       .allDocs()
  //       .then((result: any) => {
  //         console.log('deleteAll result', result);
  //         result.rows.forEach((element: any) => {
  //           this.db.remove(element);
  //         });
  //       })
  //       .catch((error: any) => {
  //         console.error(error);
  //       });
  //   }
  // }
}
/**
 * Type definition for browser notes.
 */
export class BrowserNote {
  id?: any;
  title: string = '';
  description: string = '';
  text: string = '';
  createdDate!: Date;
  updatedDate!: Date;

  /**
   *
   */
  constructor() {
    console.log('BN ctor called');
  }

  static createFromText(text: string, title?: string): BrowserNote {
    const note = new BrowserNote();
    note.id = Date.now().toString();
    note.title = title ?? new Date().toDateString();
    note.text = text;
    note.createdDate = new Date();

    return note;
  }
}
