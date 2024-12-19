import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { RegisterCarComponent } from './register-car/register-car.component';
import { EntryListComponent } from './entry-list/entry-list.component';
import { CurrentCircuitComponent } from './current-circuit/current-circuit.component';
import { CurrentEntryComponent } from './current-entry/current-entry.component';
import { AuthGuard } from './guards/auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditEntryComponent } from './edit-entry/edit-entry.component';
import { OwnerGuard } from './guards/owner.guard';

export const routes: Routes = [
    {path: "", component: MainComponent},
    {path: "about", component: AboutComponent},
    {path: "register", component: RegisterComponent},
    {path: "login", component: LoginComponent},
    {path: "schedule", children: [
        {path: "", component: ScheduleComponent},
        {path: ":circuitId", component: CurrentCircuitComponent, canActivate: [AuthGuard]}
    ]},
    {path: "registerCar", component: RegisterCarComponent, canActivate: [AuthGuard]},
    {path: "entries", children: [
        {path: "", component: EntryListComponent},
        {path: ":carId", children: [
            {path: "", component: CurrentEntryComponent, canActivate: [AuthGuard]},
            {path: "edit",component: EditEntryComponent, canActivate: [OwnerGuard]}
        ]}
        // {path: ":carId", component: CurrentEntryComponent, canActivate: [AuthGuard]},
        // {path: ":carId/edit",component: EditEntryComponent, canActivate: [OwnerGuard]}
    ]},
    {path: "**", component: PageNotFoundComponent}
];
