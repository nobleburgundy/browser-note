import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-error-banner',
  templateUrl: './error-banner.component.html',
  styleUrls: ['./error-banner.component.css']
})
export class ErrorBannerComponent implements OnInit {
  errorMessage: string = '';

  @Output()
  errorMessageEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  updateErrorMessage(error: any) {
    console.log("updateErrorMessaage called error: ", error);
    this.errorMessage = error.message;
  }
}
