import { Injectable } from '@angular/core';
import { UserForAuth } from '../types/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  USER_KEY = "[user]"
  user: UserForAuth | null = null;

  get isLogget(): boolean {
    return !!this.user;
  }

  constructor() { 
    try {
      const lsUser = localStorage.getItem(this.USER_KEY) || "";
      this.user = JSON.parse(lsUser);
    } catch (error) {
      this.user = null;
    }
  }

  login() {
    this.user = {
      name: "Gosho",
      email: "test@gmail.com",
      password: "123123",
      id: "asdasdasd",
    }

    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
  }

  logout() {
    this.user = null;
    localStorage.removeItem(this.USER_KEY);
  }
}
