import { TestBed } from '@angular/core/testing';

import { OfflineStorageService } from './offline-storage-service.service';

describe('OfflineStorageServiceService', () => {
  let service: OfflineStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfflineStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
