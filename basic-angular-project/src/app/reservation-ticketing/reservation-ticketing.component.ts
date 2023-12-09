// reservation-ticketing.component.ts

import { Component } from '@angular/core';
import { ReservationTicketingService } from 'basic-angular-project\src\app\reservation-ticketing.service.ts';

@Component({
  selector: 'app-reservation-ticketing',
  templateUrl: './reservation-ticketing.component.html',
  styleUrls: ['./reservation-ticketing.component.scss']
})
export class ReservationTicketingComponent {
  constructor(private reservationTicketingService: ReservationTicketingService) {}

  
}
