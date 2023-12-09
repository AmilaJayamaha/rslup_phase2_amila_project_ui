import { TestBed } from '@angular/core/testing';

import { ReservationTicketingService } from './reservation-ticketing.service';

describe('ReservationTicketingService', () => {
  let service: ReservationTicketingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservationTicketingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
