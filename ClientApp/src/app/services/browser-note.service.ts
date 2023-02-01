import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BrowserNote } from '../models/browser-note';

@Injectable({
  providedIn: 'root',
})
export class BrowserNoteService {
  constructor(private http: HttpClient) {}

  notesApiUrl = 'https://localhost:7140/api/v1/notes';

  getNotes() {
    return this.http.get(this.notesApiUrl);
  }

  saveNote(note: BrowserNote) {
    return this.http.post<BrowserNote>(this.notesApiUrl, note, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  deleteNote(note: BrowserNote) {
    return this.http.delete(`${this.notesApiUrl}/${note.id}`);
  }
}
