import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BrowserNote } from '../models/browser-note';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import test from 'node:test';

@Injectable({
  providedIn: 'root',
})
export class BrowserNoteService implements OnInit {
  noteArray: Array<BrowserNote> = [];
  constructor(private http: HttpClient) {}
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  private notesApiUrl = 'https://localhost:7140/api/v1/notes';

  ngOnInit(): void {
    this.getNotes().subscribe((result) => {
      console.log('init getnotes result', result);
    });
  }

  getNotes(): Observable<Array<BrowserNote>> {
    return this.http.get<Array<BrowserNote>>(this.notesApiUrl).pipe(
      map((x) => {
        console.log('map x', x);
        this.noteArray = x;
        return x;
      })
    );
  }

  saveNote(note: BrowserNote): Observable<any> {
    return this.http.post<BrowserNote>(this.notesApiUrl, note, {
      headers: this.httpHeaders,
    });
  }

  updateNote(note: BrowserNote): Observable<any> {
    console.log('update note: ', note);
    note.updatedDate = new Date();

    return this.http.put<BrowserNote>(`${this.notesApiUrl}/${note.id}`, note, {
      headers: this.httpHeaders,
    });
  }

  deleteNote(note: BrowserNote): Observable<any> {
    return this.http.delete(`${this.notesApiUrl}/${note.id}`);
  }
}
