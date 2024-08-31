import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicine } from './medicine'; // Ensure correct import

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  private baseUrl = 'http://localhost:8080/api/v3'; // Base API URL

  constructor(private httpClient: HttpClient) {}

  // Fetch all medicines
  getMedicines(): Observable<Medicine[]> {
    return this.httpClient.get<Medicine[]>(`${this.baseUrl}/medicines`); // Correct endpoint
  }

  // Create a new medicine
  createMedicine(medicine: Medicine): Observable<Medicine> {
    return this.httpClient.post<Medicine>(`${this.baseUrl}/insert`, medicine); // Correct endpoint
  }

  // Get medicine by ID
  getMedicineById(id: number): Observable<Medicine> {
    return this.httpClient.get<Medicine>(`${this.baseUrl}/medicines/${id}`); // Correct endpoint
  }

  // Update existing medicine
  updateMedicine(id: number, medicine: Medicine): Observable<Medicine> {
    return this.httpClient.put<Medicine>(`${this.baseUrl}/medicines/${id}`, medicine); // Correct endpoint
  }
  delete(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl}/medicines/${id}`);
  }
  
  
}
