import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css']
})
export class PreferencesComponent implements OnInit {
  version = 'Angular ' + VERSION.major;
  languages = ['Markdown', 'TypeScript', 'C#', 'JavaScript', 'Java', 'Text']
  themes = ['Light', 'Dark']

  constructor() { }

  ngOnInit(): void {
  }
}
