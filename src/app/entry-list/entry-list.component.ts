import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Car } from '../types/cars';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-entry-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './entry-list.component.html',
  styleUrl: './entry-list.component.css'
})
export class EntryListComponent implements OnInit {
  cars: Car[] = [];

  constructor(private apiService: ApiServiceService) {}

  ngOnInit(): void {
    this.apiService.getEnries().subscribe(cars => {
      console.log(cars);

      this.cars = cars
    })
  }
}
