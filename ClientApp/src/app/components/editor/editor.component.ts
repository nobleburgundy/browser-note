import { Component, Input, OnInit } from '@angular/core';
import { BrowserNoteService } from 'src/app/services/browser-note.service';
import {
  BrowserNote,
  OfflineStorageService,
} from 'src/app/services/offline-storage-service.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
})
export class EditorComponent implements OnInit {
  codeMirrorOptions: any = {
    mode: 'text',
    indentWithTabs: false,
    smartIndent: true,
    lineNumbers: false,
    lineWrapping: false,
    extraKeys: { 'Ctrl-Space': 'autocomplete' },
    gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
    autoCloseBrackets: true,
    matchBrackets: true,
    lint: true,
    autoFocus: true,
  };

  @Input()
  data!: string;
  content!: BrowserNote;
  cursor!: {};

  /**
   *
   * @param noteRestService The depenency injected to service for handling offline storage.
   */
  constructor(private noteRestService: BrowserNoteService) {}

  ngOnInit(): void {}

  /**
   * Method responsibile for updating the content of the editor.
   *
   * @param updatedContent
   */
  setEditorContent(updatedContent: string) {
    if (!this.content) {
      this.content = BrowserNote.createFromText(updatedContent);
    }
    this.content.text = updatedContent;
  }

  /**
   * Set's the cursor position
   * @param line The line number to set the cursor position.
   * @param pos The character position to set the cursor.
   */
  setCursor(line: number, pos: number) {
    this.cursor = { line, pos };
  }

  /**
   * Saves the current note in the editor using the offline storage service.
   * @returns
   */
  saveNote(): Promise<string> | void {
    console.log('saveNote called');

    // return this.offlineStorageService.put(this.content).then((result: any) => {
    //   console.log("successful note save");

    //   return result;
    // }).catch((error: any) => {
    //   console.error(error);
    // });
  }

  debounceNOTWORKING = (fn: Function, ms = 300) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return function (this: any, ...args: any[]) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn.apply(this, args), ms);
    };
  };
}

class EditorCursor {
  private pos: number;
  private line: number;

  constructor(line: number, pos: number) {
    this.pos = pos;
    this.line = line;
  }
}
