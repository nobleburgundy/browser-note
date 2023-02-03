import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.css'],
})
export class LanguageSelectorComponent implements OnInit {
  @Input()
  languages: Array<string> = [
    'Text',
    'Markdown',
    'TypeScript',
    'C#',
    'JavaScript',
    'Java',
  ];

  @Input()
  dropdownLabel!: string;

  constructor() {}

  ngOnInit(): void {}
}
