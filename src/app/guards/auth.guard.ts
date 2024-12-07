import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../auth/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  canActivate(): boolean {
    if (this.userService.isLogget) {
      return true;
    } else {
      this.toastr.warning('You need to log in to access this page.', 'Access Denied');
      this.router.navigate(['/login']);
      return false;
    }
  }
}

