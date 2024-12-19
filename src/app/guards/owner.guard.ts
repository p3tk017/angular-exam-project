import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { CurrentEntryComponent } from "../current-entry/current-entry.component";
import { UserService } from "../auth/user.service";
import { ApiServiceService } from "../api-service.service";
import { catchError, map, Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root',
})


export class OwnerGuard implements CanActivate {
    constructor(
      private apiService: ApiServiceService,
      private userService: UserService,
      private router: Router
    ) {}
  
    canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
      const carId = route.params['carId']; 
  
      return this.apiService.getEntry(carId).pipe(
        map((car) => {
          const userId = this.userService.getUserId(); 
          console.log(userId);
          console.log(car.owner._id);
        
          if (car.owner._id == userId) {
            return true; // User is the owner
          } else {
            this.router.navigate(['/entries']); 
            return false;
          }
        }),
        catchError(() => {
          this.router.navigate(['/entries']); 
          return of(false);
        })
      );
    }
}
