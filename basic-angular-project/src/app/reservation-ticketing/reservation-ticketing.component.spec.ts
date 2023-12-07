import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationTicketingComponent } from './reservation-ticketing.component';

describe('ReservationTicketingComponent', () => {
  let component: ReservationTicketingComponent;
  let fixture: ComponentFixture<ReservationTicketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservationTicketingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservationTicketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
