import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css']
})
export class PreferencesComponent implements OnInit {
  version = 'Angular ' + VERSION.major;

  constructor() { }

  ngOnInit(): void {
  }
}
