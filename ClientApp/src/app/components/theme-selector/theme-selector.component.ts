import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-selector',
  templateUrl: './theme-selector.component.html',
  styleUrls: ['./theme-selector.component.css']
})
export class ThemeSelectorComponent implements OnInit {
  themes = ['Light', 'Dark', 'Solar', 'Retro'];

  constructor() { }

  ngOnInit(): void {
  }

}
