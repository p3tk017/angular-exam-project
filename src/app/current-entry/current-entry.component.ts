import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import { Car } from '../types/cars';
import { UserService } from '../auth/user.service';

@Component({
  selector: 'app-current-entry',
  standalone: true,
  imports: [],
  templateUrl: './current-entry.component.html',
  styleUrl: './current-entry.component.css'
})
export class CurrentEntryComponent implements OnInit {
  car = {} as Car;
  carData: any = null; 
  userId: string = ''; 

  constructor(private route: ActivatedRoute, private apiService: ApiServiceService, private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    const id  = this.route.snapshot.params["carId"]; 

    this.apiService.getEntry(id).subscribe((car) => {
      this.car = car; 
    });

    this.userService.user$.subscribe((user) => {
      this.userId = user?._id || '';
    });

    if (id) {
      this.apiService.getEntry(id).subscribe((car) => {
        this.carData = car;
      });
    }
  }
    
  get isOwner(): boolean {
    return this.carData?.owner?._id === this.userId;
  }

  deleteCar() {
    if (this.isOwner) {
    this.apiService.deleteEntry(this.carData._id);
    this.router.navigate(["/entries"])
    } else {
      console.error("Not owner!!")
    }
  }
}
