import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { WelcomeStaffComponent } from './welcome-staff/welcome-staff.component';
import { WelcomeComponent } from './welcome/welcome.component';



const routes: Routes = [
   {path:'', component: LoginComponent},
   {path:'login', component: LoginComponent},
  //{path:'',component:LoginFormComponent},
  //{path:'login-form',component:LoginFormComponent},
  {path:'welcomeAdmin/:name', component:WelcomeComponent, canActivate:[RouteGuardService]},
  {path:'welcomeStaff/:name', component:WelcomeStaffComponent, canActivate:[RouteGuardService]},
  {path:'logout', component:LogoutComponent, canActivate:[RouteGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
