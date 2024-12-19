import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { Car } from './types/cars';
import { Circuit } from './types/circuits';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  getEnries() {
    const { apiUrl } = environment;
    return this.http.get<Car[]>(`${apiUrl}/cars`);
  }

  getEntry(id:string) {
    const { apiUrl } = environment;
    return this.http.get<Car>(`${apiUrl}/cars/${id}`);
  }

  createEntry(car: Object) {
    const { apiUrl } = environment;
    return this.http.post<Car>(`${apiUrl}/cars`, car, { withCredentials: true }).subscribe((response) => {
      console.log("Car saved", response);
    });
  }

  deleteEntry(id: string): void {
    const { apiUrl } = environment;
    this.http.delete(`${apiUrl}/cars/${id}`, { withCredentials: true }).subscribe(() => {
      console.log("Car deleted");
    })
  }

  getCircuits() {
    const { apiUrl } = environment;
    return this.http.get<Circuit[]>(`${apiUrl}/circuits`);
  }

  getSingleCircuit(id:string) {
    const { apiUrl } = environment;
    return this.http.get<Circuit>(`${apiUrl}/circuits/${id}`);
  }
}
