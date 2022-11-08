import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.css']
})
export class LanguageSelectorComponent implements OnInit {

  @Input()
  languages: Array<string> = ['Markdown', 'TypeScript', 'C#', 'JavaScript', 'Java', 'Text'];

  @Input()
  dropdownLabel!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
