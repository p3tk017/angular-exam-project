import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { Car } from './types/cars';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  getEnries() {
    const { apiUrl } = environment;
    return this.http.get<Car[]>(`${apiUrl}/cars`);
  }
}
