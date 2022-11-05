import { Component, VERSION } from '@angular/core';
import { faCog } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  version = 'Angular ' + VERSION.major;
  codeMirrorOptions: any = {
    mode: "text",
    indentWithTabs: true,
    smartIndent: true,
    lineNumbers: true,
    lineWrapping: false,
    extraKeys: { "Ctrl-Space": "autocomplete" },
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
    autoCloseBrackets: true,
    matchBrackets: true,
    lint: true
  };

  query!: string;
  content!: string;
  faCog = faCog;

  ngOnInit() {
    this.content = "start typing here"
    console.log(this.query);
  }

  setEditorContent(event: any) {
    console.log(this.query);
  }
}
