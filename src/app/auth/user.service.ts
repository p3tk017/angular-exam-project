import { Injectable } from '@angular/core';
import { UserForAuth } from '../types/users';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, take, tap } from 'rxjs';
import {environment} from '../../environment/environment'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user$$ = new BehaviorSubject<UserForAuth | null>(null);
  user$ = this.user$$.asObservable();

  USER_KEY = "[user]"
  user: UserForAuth | null = null;

  get isLogget(): boolean {    
    return !!this.user;
  }

  constructor(private http: HttpClient) { 
    this.user$.subscribe((user) => {
      this.user = user
    })
  }

  getUserId(): string {
      return this.user$$.value?._id || "";
  }

  login(email: string, password: string) {
    return this.http
      .post<UserForAuth>(`${environment.apiUrl}/auth/login` , {email, password}, {withCredentials: true})
      .pipe(tap((user) => this.user$$.next(user)));
  }

  register(name: string, email: string, password: string, rePassword: string) {
    return this.http
      .post<UserForAuth>(`${environment.apiUrl}/auth/register` , {name, email, password, rePassword}, {withCredentials: true})
      .pipe(tap((user) => this.user$$.next(user)));
  }

  getProfile() {
      return this.http
        .get<UserForAuth>(`${environment.apiUrl}/auth/profile`, {withCredentials: true})
        .pipe(tap((user) => this.user$$.next(user)))
  }

  logout() {
    return this.http
      .get(`${environment.apiUrl}/auth/logout`, {withCredentials: true})
      .pipe(tap((user) => this.user$$.next(null)));
  }
}
