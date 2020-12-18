import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from 'src/app/modules/login/login.component';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { SignupComponent } from 'src/app/modules/signup/signup.component';



@NgModule({
  declarations: [AuthComponent, LoginComponent,SignupComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AuthModule { }
