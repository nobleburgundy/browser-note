import { Injectable, OnInit } from '@angular/core';
import PouchDB from 'pouchdb';

@Injectable({
  providedIn: 'root'
})
export class OfflineStorageServiceService implements OnInit {
  private db: any;
  private readonly db_name = "browser_notes_db";

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

  put(note: any) {
    console.log("offlinestorage put called", note);

    this.db.put(note);
  }
}
