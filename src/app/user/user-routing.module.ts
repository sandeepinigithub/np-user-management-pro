import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPageComponent } from './user-page/user-page.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {path:'' ,component: UserComponent,children:[
    {path:'',redirectTo:'user-page',pathMatch:'full'},
    {path:'user-page',component:UserPageComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
