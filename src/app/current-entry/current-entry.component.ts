import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import { Car } from '../types/cars';

@Component({
  selector: 'app-current-entry',
  standalone: true,
  imports: [],
  templateUrl: './current-entry.component.html',
  styleUrl: './current-entry.component.css'
})
export class CurrentEntryComponent implements OnInit {
  car = {} as Car;

  constructor(private route: ActivatedRoute, private apiService: ApiServiceService) {}

  ngOnInit(): void {
    const id  = this.route.snapshot.params["carId"]; 

    this.apiService.getEntry(id).subscribe((car) => {
      this.car = car; 
    });
  }
}
