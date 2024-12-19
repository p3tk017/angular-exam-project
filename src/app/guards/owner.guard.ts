import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { CurrentEntryComponent } from "../current-entry/current-entry.component";

@Injectable({
  providedIn: 'root',
})

export class OwnerGuard implements CanActivate {

    constructor(private entryComp: CurrentEntryComponent, private router: Router) {

    }

    canActivate(): boolean {
        if (this.entryComp.isOwner) {
            return true
        } else {
            this.router.navigate(["/**"])
            return false
        }
    }
}