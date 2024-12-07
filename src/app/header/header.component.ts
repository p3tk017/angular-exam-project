import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../auth/user.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor (private userService: UserService, private router: Router) {}

  get isLoggedIn(): boolean {
    return this.userService.isLogget;
  }

  get name(): string {
    return this.userService.user?.name || "";
  }

  logout() {
    this.userService.logout();
    this.router.navigate([""]);
    }
}
