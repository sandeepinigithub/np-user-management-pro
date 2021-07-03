import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '../admin/admin.component';
import { LoginComponent } from './login.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: '', component:LoginComponent ,children:[
    {path:'',redirectTo:'signin',pathMatch:'full'},
    {path:'signin' , component : SigninComponent},
    {path:'signup' , component : SignupComponent},
  ]}
  // {path:'' , redirectTo:'login' , pathMatch:'full',children:[
  //   {path:'login' , component: LoginComponent}
  // ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
