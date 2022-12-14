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

  getDoc(note: BrowserNote) {
    console.log("getDoc() called");

    this.offlineStorageService.getById(note._id).then((result) => {
      this.data = result.text;
      console.log("getDoc result", result);
    });
  }

  saveDoc() {
    console.log("saveDoc() called");

    this.offlineStorageService.put(this.data).then((result) => {
      console.log("saveDoc result", result);
    });
  }

  deleteDoc() {
    console.log("deleteDoc() called");

    this.offlineStorageService.deleteById(this.data).then((result) => {
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
