import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from './appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {


  private baseUrl: string = "http://localhost:8080/api/v2/appointments";  // Assumed endpoint for appointments

  constructor(private httpClient: HttpClient) { }

  getAllAppointments(): Observable<Appointment[]> {
    return this.httpClient.get<Appointment[]>(`${this.baseUrl}`);  // Return an observable of Appointment array

  }

  createAppointment(appointment: Appointment): Observable<Appointment> {
    const url = `${this.baseUrl}/insert`;
    return this.httpClient.post<Appointment>(url, appointment);
}

deleteAppointment(id: number): Observable<object> {
  const url = `${this.baseUrl}/appointments/${id}`;
  return this.httpClient.delete(url);
}

}
