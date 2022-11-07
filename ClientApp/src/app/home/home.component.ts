import { Component, VERSION } from '@angular/core';
import { faCog } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  faCog = faCog;
  version = 'Angular ' + VERSION.major;

  ngOnInit() {
  }
}
