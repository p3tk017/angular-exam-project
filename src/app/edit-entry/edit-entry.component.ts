import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Car } from '../types/cars';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-edit-entry',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-entry.component.html',
  styleUrl: './edit-entry.component.css'
})
export class EditEntryComponent implements OnInit {
  car = {} as Car

  constructor(private route: ActivatedRoute, private apiService: ApiServiceService, private router: Router) {}

  ngOnInit(): void {
    const id  = this.route.snapshot.params["carId"];

    this.apiService.getEntry(id).subscribe((car) => {
      this.car = car;
    }) 
  }

  onSubmit(form: any) {
    const id = this.route.snapshot.params["carId"]
    this.apiService.editEntry(id, this.car);
    this.router.navigate(["entries", id])
  }
}
