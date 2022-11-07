import { Component, VERSION, ViewChild } from '@angular/core';
import { CodemirrorComponent } from '@ctrl/ngx-codemirror';
import { faCog } from '@fortawesome/free-solid-svg-icons'
import * as CodeMirror from 'codemirror';
import { EditorComponent } from '../components/editor/editor.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  faCog = faCog;
  version = 'Angular ' + VERSION.major;

  @ViewChild(EditorComponent, { static: false })
  editor!: EditorComponent;

  ngOnInit() {
  }

  editorUpdate() {
    console.log("editorUpdateCalled", this.editor.content);
  }
}
