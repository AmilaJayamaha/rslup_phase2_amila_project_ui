import { Component } from '@angular/core';
import { PassengerManagementService } from 'basic-angular-project\src\app\passenger-management.service.ts';

@Component({
  selector: 'app-passenger-management',
  templateUrl: './passenger-management.component.html',
  styleUrls: ['./passenger-management.component.scss']
})
export class PassengerManagementComponent {
  constructor(private passengerService: PassengerManagementService) {}

  }
