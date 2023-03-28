import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetpwdComponent } from './forgetpwd/forgetpwd.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OtpComponent } from './otp/otp.component';

const routes: Routes = [
  {path: "login" , component : LoginComponent},
  {path : "", component : RegisterComponent},
  {path : "forgetpwd", component : ForgetpwdComponent},
  {path : "otp/:id", component : OtpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
