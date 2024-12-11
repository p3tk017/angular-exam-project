import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-register-car',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register-car.component.html',
  styleUrl: './register-car.component.css'
})
export class RegisterCarComponent {
  constructor(private apiService: ApiServiceService) {}

  registerCar(form: NgForm) {
    if(form.invalid) {
      console.log(form.invalid);
      return
    }

    console.log(form.value);
    
  }
}
