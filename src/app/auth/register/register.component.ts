import { Component } from '@angular/core';
import { FormControl, FormGroup, MinLengthValidator, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { EmailValidator } from '../../utils/email.validator';
import { DOMAINS } from '../../constants';
import { matchPasswordsValidator } from '../../utils/match-passwords';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  form = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3)]),
    email: new FormControl("", [Validators.required, EmailValidator(DOMAINS)]),
    passGroup: new FormGroup({
      password: new FormControl("", [Validators.required, Validators.minLength(6)]),
      rePassword: new FormControl("", [Validators.required])
    },
    {
      validators: [matchPasswordsValidator('password', 'rePassword')]
    }
  )
  })

  constructor(private userService: UserService, private router: Router) {}

  register() {
    if(this.form.invalid) {
      return;
    }

    const {
      name,
      email,
      passGroup: {password, rePassword} = {}, 
    } = this.form.value;
    
    this.userService.register(name!, email!, password!, rePassword!)
    .subscribe(() => {

      this.router.navigate([""])
    }) 
  }

  get passGroup() {
    return this.form.get('passGroup');
  }
}
