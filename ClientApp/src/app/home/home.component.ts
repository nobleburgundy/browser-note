import { Component, VERSION, ViewChild } from '@angular/core';
import { CodemirrorComponent } from '@ctrl/ngx-codemirror';
import { faCog, faTrash } from '@fortawesome/free-solid-svg-icons';
import * as CodeMirror from 'codemirror';
import { EditorComponent } from '../components/editor/editor.component';
import { BrowserNote, OfflineStorageService } from '../services/offline-storage-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  faCog = faCog;

  @ViewChild(EditorComponent, { static: false })
  editor!: EditorComponent;
  data = "";

  private testDocument = {
    "_id": "123",
    "title": "11172022 Notes",
    "text": `Upper roof fix easy - $1500 
    Basement easy refinish - 30k 
    Replace front doors - 10k`,
    createdDate: new Date()
  } as BrowserNote;

  private testDocument2 = {
    "_id": "456",
    "title": "Job Hunting Notes",
    "text": `Tyler - Nextera: large renewable energy co. Looking for professional
    python experience. [MAYBE] 
    `,
    createdDate: new Date()
  } as BrowserNote;

  private testDocument3 = {
    "_id": "789",
    "title": "",
    "text": `provisionphr.com u:jimi_hendo p:blar123 \n new prescription available later today.`,
    createdDate: new Date()
  } as BrowserNote;

  constructor(private offlineStorageService: OfflineStorageService) { }

  ngOnInit() {
  }

  editorUpdate() {
    console.log("editorUpdateCalled", this.editor.content);
  }

  getAllDocs() {
    console.log("getDoc() called");


    this.offlineStorageService.getAll().then((result) => {
      console.log("getAllDoc result", result as [BrowserNote]);
    });
  }

  getDoc() {
    console.log("getDoc() called");

    this.offlineStorageService.getById(this.testDocument._id).then((result) => {
      this.data = result.text;
      console.log("getDoc result", result);
    });
  }

  saveDoc() {
    console.log("saveDoc() called");

    this.offlineStorageService.put(this.testDocument3).then((result) => {
      console.log("saveDoc result", result);
    });
  }

  deleteDoc() {
    console.log("deleteDoc() called");

    this.offlineStorageService.deleteById(this.testDocument._id).then((result) => {
      console.log("deleteDoc result", result);
    });
  }

  deleteAllDocs() {
    console.log("deleteAllDoc() called");

    this.offlineStorageService.deleteAll().then((result) => {
      console.log("deleteAllDoc result", result);
    });
  }
}
