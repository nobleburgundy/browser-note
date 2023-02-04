import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BrowserNote } from 'src/app/models/browser-note';
import { BrowserNoteService } from 'src/app/services/browser-note.service';

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
  existingNoteArray: Array<BrowserNote> = [];

  private id!: number;
  private url!: string;
  private autoSave = false;
  routeChangeSubscription = new Subscription();

  /**
   *
   * @param noteRestService The depenency injected to service for handling offline storage.
   */
  constructor(
    private noteRestService: BrowserNoteService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // subscribe to route change events
    this.route.params.subscribe((params) => (this.id = params['id']));
    console.log('note id', this.id);

    // get the existing notes if in route, then load the latest into the editor
    if (this.id) {
      this.noteRestService.getNotes().subscribe((result) => {
        this.existingNoteArray = result;
        const currentNote = result.find((note) => note.id == this.id);
        this.content = currentNote ?? new BrowserNote();
        this.setEditorContent(
          currentNote?.text ?? `Warning: Note with id '${this.id}' not found`
        );
      });
    }

    // auto save testing code
    let tC = 0;
    let content = new BrowserNote();
    content.text = '';
    if (this.autoSave) {
      setInterval(() => {
        if (this.content == undefined || content?.text === this.content?.text) {
          console.log('no changes', tC);
        } else {
          console.log('test count', tC);
          console.log('len', this.content?.text.length);
          this.noteRestService.saveNote(this.content);
        }
        tC++;
        content = this.content;
      }, 10000);
    }
  }

  /**
   * Method responsibile for updating the content of the editor.
   *
   * @param updatedContent
   */
  setEditorContent(updatedContent: string) {
    if (!this.content) {
      this.content = BrowserNote.createFromText(updatedContent);
    }
    // TODO clean up use of ths.data and this.content
    this.data = updatedContent;
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
    if (this.existingNoteArray.map((e) => e.id).includes(this.content.id)) {
      console.log('pre update', this.content, 'id', this.content.id);

      this.noteRestService.updateNote(this.content).subscribe((result) => {
        console.log('update note successful:', result);
      });
    } else {
      this.noteRestService.saveNote(this.content).subscribe((result) => {
        this.content = result;
        this.existingNoteArray.push(this.content);
      });
    }
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
