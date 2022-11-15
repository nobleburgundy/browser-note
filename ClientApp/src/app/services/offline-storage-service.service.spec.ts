import { TestBed } from '@angular/core/testing';

import { OfflineStorageServiceService } from './offline-storage-service.service';

describe('OfflineStorageServiceService', () => {
  let service: OfflineStorageServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfflineStorageServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
