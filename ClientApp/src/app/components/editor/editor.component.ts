import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  codeMirrorOptions: any = {
    mode: "text",
    indentWithTabs: true,
    smartIndent: true,
    lineNumbers: false,
    lineWrapping: false,
    extraKeys: { "Ctrl-Space": "autocomplete" },
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
    autoCloseBrackets: true,
    matchBrackets: true,
    lint: true,
    autoFocus: true
  };

  @Input()
  data!: string;

  content!: string;
  cursor!: {};

  constructor() { }

  ngOnInit(): void { }

  setEditorContent(updatedContent: string) {
    console.log(updatedContent);
    this.content = updatedContent;
  }

  setCursor(line: number, pos: number) {
    this.cursor = { line, pos };
  }
}

class EditorCursor {
  private pos: number;
  private line: number;

  constructor(line: number, pos: number) {
    this.pos = pos;
    this.line = line;
  }
}
