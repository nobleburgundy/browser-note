import { TestBed } from '@angular/core/testing';

import { BrowserNoteService } from './browser-note.service';

describe('BrowserNoteService', () => {
  let service: BrowserNoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrowserNoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
