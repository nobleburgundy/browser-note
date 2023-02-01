import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BrowserNoteService {
  constructor(private http: HttpClient) {}

  notesApiUrl = 'https://localhost:7140/api/v1/notes';

  getNotes() {
    return this.http.get(this.notesApiUrl);
  }
}
