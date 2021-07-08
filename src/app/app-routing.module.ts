import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './gaurds/auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'', loadChildren : ()=>import('./home/home.module').then(m=>m.HomeModule)},
  {path: 'login' , loadChildren : ()=> import('./login/login.module').then(m => m.LoginModule)},
  {path: 'admin' , loadChildren : ()=> import('./admin/admin.module').then(m => m.AdminModule) , canActivate: [AuthGuard]},
  {path: 'user' , loadChildren : ()=> import('./user/user.module').then(m => m.UserModule) ,  canActivate: [AuthGuard]},
  // { path: '**', component: NotFoundComponent }
  {path:'**',redirectTo:'not-found',pathMatch:'full'},
    {path: 'not-found', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
