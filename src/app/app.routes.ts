import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { RegisterCarComponent } from './register-car/register-car.component';

export const routes: Routes = [
    {path: "", component: MainComponent},
    {path: "about", component: AboutComponent},
    {path: "register", component: RegisterComponent},
    {path: "login", component: LoginComponent},
    {path: "schedule", component: ScheduleComponent},
    {path: "registerCar", component: RegisterCarComponent}
];
