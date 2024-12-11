import { Component } from '@angular/core';
import { EmailValidator, FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../user.service';
import { EmailDirective } from '../../directives/email.directive';
import { DOMAINS } from '../../constants';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, EmailDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  domains = DOMAINS
  constructor(private userService: UserService, private router: Router) {}

  login(form: NgForm) {
    
    if(form.invalid) {
      console.log("Invalid form!!");
      
      return;
    }
    
    this.userService.login();
    this.router.navigate([""])
  }
}
