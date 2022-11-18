import { Injectable, OnInit } from '@angular/core';
import PouchDB from 'pouchdb';

@Injectable({
  providedIn: 'root'
})
export class OfflineStorageService implements OnInit {
  private db: any;
  private readonly db_name = "browser_notes_db";
  private notesArray: Array<BrowserNote> = [];

  constructor() {
    if (this.db?.db_name !== this.db_name) {
      this.db = new PouchDB(this.db_name);
    }
  }

  ngOnInit(): void {
    console.log("offline storage service called");
  }

  logDbInfo() {
    console.log("logDbInfo called");

    this.db.info().then(function (info: any) {
      console.log("db info:", info);
    });
  }

  getAll(): Promise<Array<any>> {
    return this.db.allDocs({ include_docs: true }).then((result: any) => {
      return result;
    }).catch((error: any) => {
      console.error(error);
    });
  }

  getById(id: string): Promise<BrowserNote> {
    return this.db.get(id).then((doc: any) => {
      return doc;
    }).catch((error: any) => {
      console.error(error);
    });
  }

  put(note: any): Promise<string> {
    console.log("offlinestorage put called", note);

    return this.db.put(note);
  }

  deleteById(id: string): Promise<string> {
    return this.db.get(id).then((doc: any) => {
      return this.db.remove(doc);
    });
  }

  deleteAll(): Promise<string> {
    return this.db.allDocs().then((result: any) => {
      console.log("deleteAll result", result);
      result.rows.forEach((element: any) => {
        this.db.remove(element);
      });
    });
  }
}

export class BrowserNote {
  _id?: any;
  title: string = "";
  description: string = "";
  text: string = "";
  createdDate!: Date;
  updatedDate!: Date;
}