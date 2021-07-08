import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';


import {MatProgressBarModule} from '@angular/material/progress-bar';


@NgModule({
  declarations: [
    LoginComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    MatProgressBarModule
    
    
  ],
})
export class LoginModule { }
