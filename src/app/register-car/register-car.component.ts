import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgForm } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';
import { UserService } from '../auth/user.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-car',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register-car.component.html',
  styleUrl: './register-car.component.css'
})
export class RegisterCarComponent{
  car = {
    number: null,
    manufacturer: '',
    model: '',
    imageUrl: '',
    driver1: {
      name: '',
      age: null,
      nationality: '',
    },
    driver2: {
      name: '',
      age: null,
      nationality: '',
    },
    owner: '',
  };

  constructor(private apiService: ApiServiceService, private userService: UserService, private router: Router) {}

  onSubmit(form: any) {
    if(form.valid) {
      this.apiService.createEntry(this.car);
      this.router.navigate(["/entries"])

    } else {
      console.log("Invalid form");
      return;
    }
  }
}

