import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { LeavePageComponent } from './leave-page/leave-page.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { UserPageComponent } from './user-page/user-page.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {path:'' ,component: UserComponent,children:[
    {path:'',redirectTo:'user-page',pathMatch:'full'},
    {path:'user-page',component:UserPageComponent},
    {path:'profile',component:ProfileComponent},
    {path:'leave-page',component:LeavePageComponent},
    {path:'settings',component:SettingsComponent},
    {path:'accounts',component:AccountsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
