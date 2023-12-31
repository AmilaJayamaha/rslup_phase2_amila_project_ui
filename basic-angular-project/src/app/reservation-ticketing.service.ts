import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationTicketingService {
  private apiUrl = 'http://localhost:5000/api';  

  constructor(private http: HttpClient) {}

  searchFlights(searchParams: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/flights/search`, searchParams);
  }

  makeReservation(reservationData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/reservations`, reservationData);
  }

}
