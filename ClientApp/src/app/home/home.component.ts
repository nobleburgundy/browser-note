import { Component, VERSION, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CodemirrorComponent } from '@ctrl/ngx-codemirror';
import { faCog, faTrash } from '@fortawesome/free-solid-svg-icons';
import * as CodeMirror from 'codemirror';
import { Subscription } from 'rxjs';
import { EditorComponent } from '../components/editor/editor.component';
import { BrowserNote } from '../models/browser-note';
import { BrowserNoteService } from '../services/browser-note.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  faCog = faCog;

  @ViewChild(EditorComponent, { static: false })
  editor!: EditorComponent;
  data = '';
  routeSubscription: Subscription = new Subscription();

  constructor() {}

  ngOnInit() {}

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

  editorUpdate() {
    // console.log('editorUpdateCalled', this.editor.content);
  }
}
