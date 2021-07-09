import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdminComponent } from './admin.component';
import { CalenderComponent } from './calender/calender.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { ProjectsComponent } from './projects/projects.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {path:'' , component : AdminComponent ,children:[
    {path:'',redirectTo:'admin-page',pathMatch:'full'},
    {path: 'admin-page', component: AdminPageComponent},
    {path: 'feedbacks', component: FeedbacksComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'calender', component: CalenderComponent},
    {path: 'settings', component: SettingsComponent},
    {path: 'accounts', component: AccountsComponent},
    
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
