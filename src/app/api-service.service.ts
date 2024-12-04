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

  getCircuits() {
    const { apiUrl} = environment;
    return this.http.get<Circuit[]>(`${apiUrl}/circuits`);
  }

  getSingleCircuit(id:string) {
    const { apiUrl} = environment;
    return this.http.get<Circuit>(`${apiUrl}/circuits/${id}`);
  }
}
