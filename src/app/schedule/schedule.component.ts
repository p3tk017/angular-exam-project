import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Circuit } from '../types/circuits';
import { RouterLink } from '@angular/router';
import { UserService } from '../auth/user.service';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css'
})
export class ScheduleComponent implements OnInit {
  circuits: Circuit[] = [];

  constructor(private apiService: ApiServiceService, private userService: UserService) {}

  ngOnInit(): void {
    this.apiService.getCircuits().subscribe(circuits => {
      console.log(circuits);
  
      this.circuits = circuits
    })
  }
}
