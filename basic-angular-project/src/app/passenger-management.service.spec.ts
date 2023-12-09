import { TestBed } from '@angular/core/testing';

import { PassengerManagementService } from './passenger-management.service';

describe('PassengerManagementService', () => {
  let service: PassengerManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassengerManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
